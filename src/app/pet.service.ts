import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Pet } from "./pets";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PetService{
    private apiServerUrl= environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getPets(): Observable<Pet[]> {
        return this.http.get<Pet[]>(`${this.apiServerUrl}/api/pets/all`)
    }
    public addPet(pet: Pet): Observable<Pet> {
        return this.http.post<Pet>(`${this.apiServerUrl}/api/pets/add`, pet)
    }
    public updatePet(pet: Pet): Observable<Pet> {
        try {
            console.log(pet);
            return this.http.put<Pet>(`${this.apiServerUrl}/api/pets/update`, pet);
        } catch (error) {
            console.error(error);
            throw new Error('Failed to update pet.');
        }
    }
    public deletePet(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/pets/delete/${id}`);
    }
}