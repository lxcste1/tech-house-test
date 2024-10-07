import MyTodos from "../mis-tareas/page";

type MainContentProps = {
    selectedItem: string;
};
  
  const MainContent: React.FC<MainContentProps> = ({ selectedItem }) => {
    return (
      <div className="p-4 max-w-lg m-auto">
        <h2 className="text-xl font-bold text-neutral-60">{selectedItem}</h2>
        <MyTodos />
      </div>
    );
  };
  
  export default MainContent;