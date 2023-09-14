import { ModelComponent } from "@/components/3dModel";

function YourComponent() {
  return (
    <>
    {<ModelComponent ModelPath="/ibm_pcjr_4863_computer-freepoly.org.glb" /> || <h1>Cargando...</h1>}
    </>
  );
}

export default YourComponent;
