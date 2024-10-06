type MainContentProps = {
    selectedItem: string;
  };
  
  const MainContent: React.FC<MainContentProps> = ({ selectedItem }) => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">{selectedItem}</h2>
        {/* Aquí puedes agregar el contenido dinámico que deseas mostrar según la opción seleccionada */}
        <p>{`Contenido dinámico para ${selectedItem}`}</p>
      </div>
    );
  };
  
  export default MainContent;