import { useForm } from "react-hook-form";
import { Input } from "@chakra-ui/react";

const Formulario = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h2>Contactenos.</h2>
      <form action="">
        <div>
          <label>Nombre</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label>Direccion</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label>Edad</label>
          <input type="text" name="" id="" />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
