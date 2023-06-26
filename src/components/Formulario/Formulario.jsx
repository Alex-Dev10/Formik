
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';


export const Formulario = () => {
  const [enviado, setEnviado] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Por favor ingrese un nombre válido')
      .matches(/^[A-Z][a-z]+$/, 'Primera letra en mayúscula, sin espacios y sin números'),
    correo: Yup.string()
      .required('Ingrese un correo')
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        'Solo puede contener letras, números, puntos y guiones'
      ),
    password: Yup.string()
      .required('Ingrese una contraseña')
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Debe contener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial'
      ),
  });

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Container>
        <Formik
          initialValues={{
            name: '',
            correo: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(valores, { resetForm }) => {
            console.log(valores);
            resetForm();
            setEnviado(true);
            setTimeout(() => {
              setEnviado(false);
            }, 3000);
          }}
        >
          {({ errors, touched }) => (
            <Form className="formulario">
              <h1 className="text-center mb-4">FORMULARIO</h1>
              <Row className="mb-3">
                <Col>
                  <label className="label" htmlFor="name">
                    Nombre:
                  </label>
                  <Field
                    className={`form-control ${
                      touched.name && errors.name ? 'is-invalid' : ''
                    }`}
                    type="text"
                    name="name"
                    placeholder="Ejemplo: Alex"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="invalid-feedback"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <label className="label" htmlFor="correo">
                    Correo:
                  </label>
                  <Field
                    className={`form-control ${
                      touched.correo && errors.correo ? 'is-invalid' : ''
                    }`}
                    type="email"
                    name="correo"
                    placeholder="Ejemplo: alex@correo.com"
                  />
                  <ErrorMessage
                    name="correo"
                    component="div"
                    className="invalid-feedback"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <label className="label" htmlFor="password">
                    Contraseña:
                  </label>
                  <Field
                    className={`form-control ${
                      touched.password && errors.password ? 'is-invalid' : ''
                    }`}
                    type="password"
                    name="password"
                    placeholder="Ejemplo: Password*10"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs="auto">
                  <Button className="button" type="submit">
                    Enviar
                  </Button>
                  {enviado && (
                    <Alert className="exito" variant="success">
                      Éxito
                    </Alert>
                  )}
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};
