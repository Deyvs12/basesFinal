import React, { useState, useEffect } from 'react';
import { getAllGrupos, createGrupo, updateGrupo, deleteGrupo } from '../api/grupos';

const Grupos = () => {
  const [grupos, setGrupos] = useState([]);
  const [newGrupo, setNewGrupo] = useState({ nombre_grupo: '', grado: '', ciclo_escolar: '' });
  const [editingGrupoId, setEditingGrupoId] = useState(null);
  const [editingGrupo, setEditingGrupo] = useState({ nombre_grupo: '', grado: '', ciclo_escolar: '' });

  useEffect(() => {
    fetchGrupos();
  }, []);

  const fetchGrupos = async () => {
    try {
      const data = await getAllGrupos();
      setGrupos(data);
    } catch (error) {
      console.error('Error fetching grupos:', error);
    }
  };

  const handleCreateGrupo = async (e) => {
    e.preventDefault();
    try {
      await createGrupo(newGrupo);
      fetchGrupos();
      setNewGrupo({ nombre_grupo: '', grado: '', ciclo_escolar: '' });
    } catch (error) {
      console.error('Error creating grupo:', error);
    }
  };

  const handleUpdateGrupo = async (e) => {
    e.preventDefault();
    try {
      await updateGrupo(editingGrupoId, editingGrupo);
      fetchGrupos();
      setEditingGrupoId(null);
      setEditingGrupo({ nombre_grupo: '', grado: '', ciclo_escolar: '' });
    } catch (error) {
      console.error('Error updating grupo:', error);
    }
  };

  const handleDeleteGrupo = async (id) => {
    try {
      await deleteGrupo(id);
      fetchGrupos();
    } catch (error) {
      console.error('Error deleting grupo:', error);
    }
  };

  return (
    <div>
      <h1>Grupos</h1>

      <h2>Create Grupo</h2>
      <form onSubmit={handleCreateGrupo}>
        <input
          type="text"
          placeholder="Nombre Grupo"
          value={newGrupo.nombre_grupo}
          onChange={(e) => setNewGrupo({ ...newGrupo, nombre_grupo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Grado"
          value={newGrupo.grado}
          onChange={(e) => setNewGrupo({ ...newGrupo, grado: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ciclo Escolar"
          value={newGrupo.ciclo_escolar}
          onChange={(e) => setNewGrupo({ ...newGrupo, ciclo_escolar: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>

      <h2>Grupos List</h2>
      <ul>
        {grupos.map((grupo) => (
          <li key={grupo.id_grupo}>
            {editingGrupoId === grupo.id_grupo ? (
              <form onSubmit={handleUpdateGrupo}>
                <input
                  type="text"
                  value={editingGrupo.nombre_grupo}
                  onChange={(e) => setEditingGrupo({ ...editingGrupo, nombre_grupo: e.target.value })}
                />
                <input
                  type="text"
                  value={editingGrupo.grado}
                  onChange={(e) => setEditingGrupo({ ...editingGrupo, grado: e.target.value })}
                />
                <input
                  type="text"
                  value={editingGrupo.ciclo_escolar}
                  onChange={(e) => setEditingGrupo({ ...editingGrupo, ciclo_escolar: e.target.value })}
                />
                <button type="submit">Update</button>
              </form>
            ) : (
              <>
                {grupo.nombre_grupo} - {grupo.grado} - {grupo.ciclo_escolar}
                <button onClick={() => {
                  setEditingGrupoId(grupo.id_grupo);
                  setEditingGrupo({ nombre_grupo: grupo.nombre_grupo, grado: grupo.grado, ciclo_escolar: grupo.ciclo_escolar });
                }}>Edit</button>
                <button onClick={() => handleDeleteGrupo(grupo.id_grupo)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grupos;