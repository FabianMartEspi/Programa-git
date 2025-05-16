import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  private idCounter = 1;

  // Obtener todos los contactos
  getContacts() {
    return this.contacts;
  }

  // Agregar un nuevo contacto
  addContact(contact: Omit<Contact, 'id'>) {
    this.contacts.push({ ...contact, id: this.idCounter++ });
  }

  // Actualizar un contacto existente
  updateContact(id: number, updatedContact: Omit<Contact, 'id'>) {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index > -1) this.contacts[index] = { id, ...updatedContact };
  }

  // Eliminar un contacto
  deleteContact(id: number) {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
}
