import React, { useState, useEffect } from 'react';
import { getAllEstudiantes, createEstudiante, updateEstudiante, deleteEstudiante } from '../api/estudiantes';

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [newEstudiante, setNewEstudiante] = useState({ nombre: '', apellido: '', fecha_nacimiento: '', grupo_id: '' });
  const [editingEstudianteId, setEditingEstudianteId] = useState(null);
  const [editingEstudiante, setEditingEstudiante] = useState({ nombre: '', apellido: '', fecha_nacimiento: '', grupo_id: '' });

  useEffect(() => {
    fetchEstudiantes();
  }, []);

  const fetchEstudiantes = async () => {
    try {
      const data = await getAllEstudiantes();
      setEstudiantes(data);
    } catch (error) {
      console.error('Error fetching estudiantes:', error);
    }
  };

  const handleCreateEstudiante = async (e) => {
    e.preventDefault();
    try {
      await createEstudiante(newEstudiante);
      fetchEstudiantes();
      setNewEstudiante({ nombre: '', apellido: '', fecha_nacimiento: '', grupo_id: '' });
    } catch (error) {
      console.error('Error creating estudiante:', error);
    }
  };

  const handleUpdateEstudiante = async (e) => {
    e.preventDefault();
    try {
      await updateEstudiante(editingEstudianteId, editingEstudiante);
      fetchEstudiantes();
      setEditingEstudianteId(null);
      setEditingEstudiante({ nombre: '', apellido: '', fecha_nacimiento: '', grupo_id: '' });
    } catch (error) {
      console.error('Error updating estudiante:', error);
    }
  };

  const handleDeleteEstudiante = async (id) => {
    try {
      await deleteEstudiante(id);
      fetchEstudiantes();
    } catch (error) {
      console.error('Error deleting estudiante:', error);
    }
  };

  return (
    <div>
      <h1>Estudiantes</h1>

      <h2>Create Estudiante</h2>
      <form onSubmit={handleCreateEstudiante}>
        <input
          type="text"
          placeholder="Nombre"
          value={newEstudiante.nombre}
          onChange={(e) => setNewEstudiante({ ...newEstudiante, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={newEstudiante.apellido}
          onChange={(e) => setNewEstudiante({ ...newEstudiante, apellido: e.target.value })}
        />
        <input
          type="text"
          placeholder="Fecha de Nacimiento"
          value={newEstudiante.fecha_nacimiento}
          onChange={(e) => setNewEstudiante({ ...newEstudiante, fecha_nacimiento: e.target.value })}
        />
        <input
          type="text"
          placeholder="Grupo ID"
          value={newEstudiante.grupo_id}
          onChange={(e) => setNewEstudiante({ ...newEstudiante, grupo_id: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>

      <h2>Estudiantes List</h2>
      <ul>
        {estudiantes.map((estudiante) => (
          <li key={estudiante.id_estudiante}>
            {editingEstudianteId === estudiante.id_estudiante ? (
              <form onSubmit={handleUpdateEstudiante}>
                <input
                  type="text"
                  value={editingEstudiante.nombre}
                  onChange={(e) => setEditingEstudiante({ ...editingEstudiante, nombre: e.target.value })}
                />
                <input
                  type="text"
                  value={editingEstudiante.apellido}
                  onChange={(e) => setEditingEstudiante({ ...editingEstudiante, apellido: e.target.value })}
                />
                <input
                  type="text"
                  value={editingEstudiante.fecha_nacimiento}
                  onChange={(e) => setEditingEstudiante({ ...editingEstudiante, fecha_nacimiento: e.target.value })}
                />
                <input
                  type="text"
                  value={editingEstudiante.grupo_id}
                  onChange={(e) => setEditingEstudiante({ ...editingEstudiante, grupo_id: e.target.value })}
                />
                <button type="submit">Update</button>
              </form>
            ) : (
              <>
                {estudiante.nombre} - {estudiante.apellido} - {estudiante.fecha_nacimiento} - {estudiante.grupo_id}
                <button onClick={() => {
                  setEditingEstudianteId(estudiante.id_estudiante);
                  setEditingEstudiante({ nombre: estudiante.nombre, apellido: estudiante.apellido, fecha_nacimiento: estudiante.fecha_nacimiento, grupo_id: estudiante.grupo_id });
                }}>Edit</button>
                <button onClick={() => handleDeleteEstudiante(estudiante.id_estudiante)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Estudiantes;