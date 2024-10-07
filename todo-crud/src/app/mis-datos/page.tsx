import { MyDataForm } from "./components/MyDataForm";

const MyData: React.FC = () => {
    return (
      <div className="flex flex-col w-full gap-4 px-4 py-8 max-w-lg m-auto">
        <h2 className="text-xl font-bold text-neutral-60">Mis datos</h2>
        <MyDataForm />
      </div>
    );
  };
  
  export default MyData;