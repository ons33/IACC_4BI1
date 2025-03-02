import { Component } from '@angular/core';
import { Residence } from 'src/app/Core/Models/residence';
import { ResidenceService } from 'src/app/Core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  listResidences:Residence[]=[];


  constructor(private Rs : ResidenceService){}
  ngOnInit(): void {
    this.Rs.getResidences().subscribe(
      data => {
        this.listResidences = data;
      }
    )
  }


   //etatA = false;
   favoriteResidences: Residence[] = [];
   searchItem: string = '';

   showLocation(residence: Residence) {
    if (residence.address === "inconnu") {
      alert(`L'adresse de la résidence "${residence.name}" est inconnu.`);
      //this.etatA= false
    } else {
      alert(`Adresse de la résidence "${residence.name}": ${residence.address}`);
      //this.etatA=true;
    }
  }


  addFavorite(residence: Residence) {
    const index = this.favoriteResidences.findIndex(r => r.id === residence.id);
    if (index > -1) {
      this.favoriteResidences.splice(index, 1);  // Supprime des favoris
    } else {
      this.favoriteResidences.push(residence);  // Ajoute aux favoris
    }
  }

  isFavorite(residence: Residence) {
    return this.favoriteResidences.some(r => r.id === residence.id);
  }
  //vous pouvez la simplifier avec seulement un simple push dans une liste de favoris ( selon la classe des étudiants :) )

  // question e : on commence par ngIf puis on utilise la methode filter en ts

  filteredResidences() {
    // Filtre les résidences en fonction de l'adresse
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchItem.toLowerCase())
    );
  }
}
