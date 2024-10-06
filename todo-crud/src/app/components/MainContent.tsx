import MisTareas from "../mis-tareas/page";

type MainContentProps = {
    selectedItem: string;
};
  
  const MainContent: React.FC<MainContentProps> = ({ selectedItem }) => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{selectedItem}</h2>
        <MisTareas />
      </div>
    );
  };
  
  export default MainContent;