import React from 'react'
import './Formulario.css'
import { Formik,Form,Field, ErrorMessage } from 'formik'

export const Formulario = () => {






  return (
    <div className='container'>

    <Formik
    initialValues={{
        name:"",
        correo:"",
        password:""

    }}


validate={(valores)=>{

    let errores={}
    if(!valores.name){
        errores.name= "Por favor ingrese un nombre"
    } else if(!/^[A-Z][a-z]+$/.test(valores.name)){
        errores.name="solo puede contener letras y espacios"
    }

    if(!valores.correo){
        errores.correo= "ingrese un correo"
    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
        errores.correo="' solo puede contener, letras, numeros, puntos y guiones'"
    }


    if(!valores.password){
        errores.password="ingrese una contraseña"
    } else if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(valores.password))
    {
        errores.password="debe contener al menos 8 caracteres, al menos una letra MAYUSCULA, un numero y un caracter especial"
    }


    return errores;
}}

    onSubmit={(valores,{resetForm})=>{
        console.log(valores)
        resetForm()

    

    }}
    
    >
        {({errors})=>(

            <Form className='formulario'>

                <h1>FORMULARIO</h1>
                <div  className='nombreContainer'> 

                <label className='label' htmlFor="name"> Nombre:</label>
                <Field className="input" type="text"  name="name"   />

                <ErrorMessage  name='name' component={()=>(
                    <div className='errorname' >{errors.name} </div>
                )}/>
                
                </div>

                <div className="correoContainer">

                 <label className='label' htmlFor="correo">Correo:</label>

                 <Field className="input" type="email" name="correo"/>

                 <ErrorMessage name='correo'  component={()=>(
                    <div className='errorcorreo' > {errors.correo}</div>
                 )} />

                </div>



                <div className='contraseñaContainer'>
                        <label className='label' htmlFor="password">Contraseña:</label>
                        <Field className="input" type="password" name="password" />
                      <ErrorMessage  name="password" component={()=>(
                        <div className='errorcontraseña' > {errors.password} </div>
         ) }/>

                </div>

              <div className='buttonContainer'> <button className='button' type="submit">Enviar</button></div> 


            </Form>





        )}





    </Formik>




    </div>
  )
}
