import React from 'react';
import './Sidebar.css'; // Estilo para a barra lateral

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><a href="#">Perfil</a></li>
        <li><a href="#">DAOs Favoritas</a></li>
        <li><a href="#">Minha Equipe</a></li>
        {/* Adicione mais itens conforme necessário */}
      </ul>
    </div>
  );
}

export default Sidebar;
