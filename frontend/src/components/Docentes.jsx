import React, { useState, useEffect } from 'react';
import { getAllDocentes, createDocente, updateDocente, deleteDocente } from '../api/docentes';

const Docentes = () => {
  const [docentes, setDocentes] = useState([]);
  const [newDocente, setNewDocente] = useState({ nombre: '', apellido: '', especialidad: '' });
  const [editingDocenteId, setEditingDocenteId] = useState(null);
  const [editingDocente, setEditingDocente] = useState({ nombre: '', apellido: '', especialidad: '' });

  useEffect(() => {
    fetchDocentes();
  }, []);

  const fetchDocentes = async () => {
    try {
      const data = await getAllDocentes();
      setDocentes(data);
    } catch (error) {
      console.error('Error fetching docentes:', error);
    }
  };

  const handleCreateDocente = async (e) => {
    e.preventDefault();
    try {
      await createDocente(newDocente);
      fetchDocentes();
      setNewDocente({ nombre: '', apellido: '', especialidad: '' });
    } catch (error) {
      console.error('Error creating docente:', error);
    }
  };

  const handleUpdateDocente = async (e) => {
    e.preventDefault();
    try {
      await updateDocente(editingDocenteId, editingDocente);
      fetchDocentes();
      setEditingDocenteId(null);
      setEditingDocente({ nombre: '', apellido: '', especialidad: '' });
    } catch (error) {
      console.error('Error updating docente:', error);
    }
  };

  const handleDeleteDocente = async (id) => {
    try {
      await deleteDocente(id);
      fetchDocentes();
    } catch (error) {
      console.error('Error deleting docente:', error);
    }
  };

  return (
    <div>
      <h1>Docentes</h1>

      <h2>Create Docente</h2>
      <form onSubmit={handleCreateDocente}>
        <input
          type="text"
          placeholder="Nombre"
          value={newDocente.nombre}
          onChange={(e) => setNewDocente({ ...newDocente, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={newDocente.apellido}
          onChange={(e) => setNewDocente({ ...newDocente, apellido: e.target.value })}
        />
        <input
          type="text"
          placeholder="Especialidad"
          value={newDocente.especialidad}
          onChange={(e) => setNewDocente({ ...newDocente, especialidad: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>

      <h2>Docentes List</h2>
      <ul>
        {docentes.map((docente) => (
          <li key={docente.id_docente}>
            {editingDocenteId === docente.id_docente ? (
              <form onSubmit={handleUpdateDocente}>
                <input
                  type="text"
                  value={editingDocente.nombre}
                  onChange={(e) => setEditingDocente({ ...editingDocente, nombre: e.target.value })}
                />
                <input
                  type="text"
                  value={editingDocente.apellido}
                  onChange={(e) => setEditingDocente({ ...editingDocente, apellido: e.target.value })}
                />
                <input
                  type="text"
                  value={editingDocente.especialidad}
                  onChange={(e) => setEditingDocente({ ...editingDocente, especialidad: e.target.value })}
                />
                <button type="submit">Update</button>
              </form>
            ) : (
              <>
                {docente.nombre} - {docente.apellido} - {docente.especialidad}
                <button onClick={() => {
                  setEditingDocenteId(docente.id_docente);
                  setEditingDocente({ nombre: docente.nombre, apellido: docente.apellido, especialidad: docente.especialidad });
                }}>Edit</button>
                <button onClick={() => handleDeleteDocente(docente.id_docente)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Docentes;