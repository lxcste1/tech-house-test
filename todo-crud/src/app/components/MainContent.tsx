/* import { ItemProvider } from "@/app/mis-tareas/context/ItemContext"; */ // TODO: Resolver Context
import MyTodos from "@/app/mis-tareas/page";

type MainContentProps = {
    selectedItem: string;
};
  
  const MainContent: React.FC<MainContentProps> = ({ selectedItem }) => {
    return (
      <div className="p-4 max-w-lg m-auto">
        <h2 className="text-xl font-bold text-neutral-60">{selectedItem}</h2>
        {/* <ItemProvider> */ } {/* TODO: Resolver Context */}
            <MyTodos />
        {/* </ItemProvider> */} 
      </div>
    );
  };
  
  export default MainContent;