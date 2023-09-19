import { ModelComponent } from "@/components/3dModel";
function YourComponent({ params }) {
  const { project } = params;
  return (
    <>
      <ModelComponent ModelPath={project}></ModelComponent>
    </>
  );
}

export default YourComponent;
