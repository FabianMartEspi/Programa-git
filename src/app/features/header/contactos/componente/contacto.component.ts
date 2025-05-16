import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule], // Agrega CommonModule aquí
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  isAdmin: boolean = true; // Variable para determinar si es administrador o no
  contacts: Contact[] = []; // Lista de contactos
  editingContact: Contact = { id: 0, name: '', phone: '', email: '' }; // Inicializa correctamente

  // Método para guardar o actualizar un contacto
  saveContact(contact: Omit<Contact, 'id'>) {
    if (this.editingContact.id) {
      const index = this.contacts.findIndex(c => c.id === this.editingContact.id);
      if (index !== -1) {
        this.contacts[index] = { ...this.editingContact, ...contact };
      }
    } else {
      const newContact: Contact = {
        id: this.contacts.length ? this.contacts[this.contacts.length - 1].id + 1 : 1,
        ...contact
      };
      this.contacts.push(newContact);
    }
    // Reiniciar `editingContact` después de guardar
    this.editingContact = { id: 0, name: '', phone: '', email: '' };
  }

  // Método para editar un contacto
  editContact(contact: Contact) {
    this.editingContact = { ...contact }; // Copia para edición
  }

  // Método para eliminar un contacto
  deleteContact(id: number) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}
