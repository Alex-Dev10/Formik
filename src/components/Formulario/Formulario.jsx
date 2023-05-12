import React from 'react'
import './Formulario.css'
import { Formik,Form,Field, ErrorMessage } from 'formik'

export const Formulario = () => {






  return (
    <div className='container'>

    <Formik

    //los valores que se usaran en el formulario
    initialValues={{
        name:"",
        correo:"",
        password:""

    }}

//validaciones de cada input
validate={(valores)=>{

    let errores={}

    if(!valores.name){
        errores.name= "Por favor ingrese un nombre valido"
    } else if(!/^[A-Z][a-z]+$/.test(valores.name)){
        errores.name="Primera letra en mayuscula, sin espacios y sin numeros"
    }

    if(!valores.correo){
        errores.correo= "Ingrese un correo"
    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
        errores.correo="' Solo puede contener, letras, numeros, puntos y guiones'"
    }


    if(!valores.password){
        errores.password="Ingrese una contraseña"
    } else if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(valores.password))
    {
        errores.password="Debe contener al menos '8 caracteres', al menos una letra MAYUSCULA, un numero y un caracter especial"
    }


    return errores;
}}
//se activa cuando se envie el formulario
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
                    <Field className="input" type="text"  name="name"  placeholder=" Ejemplo : Alex" />

                    <ErrorMessage  name='name' component={()=>(
                    <div className='errorname' >{errors.name} </div>
                )}/>
                
                </div>

                <div className="correoContainer">

                 <label className='label' htmlFor="correo">Correo:</label>

                 <Field className="input" type="email" name="correo"  placeholder="  Ejemplo : alex@correo.com"  />

                 <ErrorMessage name='correo'  component={()=>(
                    <div className='errorcorreo' > {errors.correo}</div>
                 )} />

                </div>



                <div className='contraseñaContainer'>
                        <label className='label' htmlFor="password">Contraseña:</label>
                        <Field className="input" type="password" name="password"  placeholder=" Ejemplo : Password*10" />
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
