import { ModelComponent } from "@/components/3dModel";

function YourComponent() {
  return (
    <>
    {<ModelComponent ModelPath="/untitled.glb" /> || <h1>Cargando...</h1>}
    </>
  );
}

export default YourComponent;
