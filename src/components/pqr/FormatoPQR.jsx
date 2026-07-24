import { useState, useEffect } from "react";

import "./FormatoPQR.css";

import Header from "./components/Header";
import Progress from "./components/Progress";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Success from "./components/Success";


import { useRef } from "react";

import {
  getTipos,
  getTiposIdentificacion,
  getSolicitudes,
  getMotivos,
  enviarPQR,
  enviarCodigo,
  verificarCodigo
} from "./services/api";
import {
  getNombre,
  getTipoIdNombre
} from "./utils/helpers";

import {
  validateField
} from "./utils/validation";

export default function PQR() {

  /*=========================
      STATES
  =========================*/

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [radicado, setRadicado] = useState("");

  const [tipos, setTipos] = useState([]);

  const [tiposId, setTiposId] = useState([]);

  const [solicitudes, setSolicitudes] = useState([]);

  const [motivos, setMotivos] = useState([]);

  const [file, setFile] = useState(null);

  const [fileError, setFileError] = useState("");

  const ultimoCorreo = useRef("");


  const timerCorreo = useRef(null);

  const [form, setForm] = useState({

    nombre: "",

    tipo_identificacion: "",

    documento: "",

    correo: "",

    telefono: "",

    tipo: "",

    area: "",

    motivo: "",

    asunto: "",

    descripcion: ""

  });

  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  const [codigo, setCodigo] = useState("");

  const [correoVerificado, setCorreoVerificado] = useState(false);

  const [enviandoCodigo, setEnviandoCodigo] = useState(false);

  const [mensajeCodigo, setMensajeCodigo] = useState("");

  /*=========================
      SET FIELD
  =========================*/

  const set = (key, value) => {

    setForm(prev => ({
      ...prev,
      [key]: value
    }));

    setTouched(prev => ({
      ...prev,
      [key]: true
    }));

    const error = validateField(key, value);

    setErrors(prev => ({
      ...prev,
      [key]: error
    }));

    if (key === "correo") {

      setCorreoVerificado(false);

      setMensajeCodigo("");

      setCodigo("");

      ultimoCorreo.current = "";

      clearTimeout(timerCorreo.current);

      if (!error && value) {

        timerCorreo.current = setTimeout(() => {

          enviarCodigoAutomatico(value);

        }, 800);

      }

    }
  };

  /*=========================
      LOAD INITIAL DATA
  =========================*/

  useEffect(() => {

    const load = async () => {

      try {

        const [

          tiposData,

          tiposIdData

        ] = await Promise.all([

          getTipos(),

          getTiposIdentificacion()

        ]);

        setTipos(tiposData);

        setTiposId(tiposIdData);

      } catch (err) {

        console.error(err);

      }

    };

    load();

  }, []);

  /*=========================
    SCROLL AL CAMBIAR STEP
=========================*/

  useEffect(() => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }, [step]);

  /*=========================
      HANDLE TIPO
  =========================*/

  const handleTipo = async (value) => {

    set("tipo", value);

    set("area", "");

    set("motivo", "");

    setSolicitudes([]);

    setMotivos([]);

    if (!value) return;

    try {

      const data = await getSolicitudes(value);

      setSolicitudes(data);

    } catch (err) {

      console.error(err);

    }

  };

  /*=========================
      HANDLE SOLICITUD
  =========================*/

  const handleSolicitud = async (value) => {

    set("area", value);

    set("motivo", "");

    setMotivos([]);

    if (!value) return;

    try {

      const data = await getMotivos(value);

      setMotivos(data);

    } catch (err) {

      console.error(err);

    }

  };

  /*=========================
    ENVIAR CÓDIGO
=========================*/


  const enviarCodigoAutomatico = async (correo) => {

    if (!correo) return;

    if (ultimoCorreo.current === correo) return;

    ultimoCorreo.current = correo;

    try {

      setEnviandoCodigo(true);

      await enviarCodigo(correo);

      setMensajeCodigo("📨 Te enviamos un código de verificación.");

    } catch (err) {

      console.error(err);

    } finally {

      setEnviandoCodigo(false);

    }

  };
  /*=========================
    VERIFICAR CÓDIGO
=========================*/

  const verificarCodigoCorreo = async (valor) => {

    if (valor.length !== 6) return;

    try {

      await verificarCodigo(form.correo, valor);

      setCorreoVerificado(true);


    } catch (err) {

      console.error(err);

      setCorreoVerificado(false);

      setMensajeCodigo("❌ Código incorrecto.");

    }

  };

  /*=========================
      SUBMIT
  =========================*/

  const submit = async () => {

    try {

      setLoading(true);

      const data = await enviarPQR(form, file);

      setRadicado(data.radicado);

      setStep(4);

    } catch (err) {

      console.error(err);

      alert("No fue posible enviar la solicitud.");

    } finally {

      setLoading(false);

    }

  };    /*=========================
        RENDER
    =========================*/

  return (

    <div className="pqr">

      <div className="pqr-box">

        <Header />

        <Progress step={step} />

        {step === 1 && (

          <StepOne

            form={form}

            set={set}

            tiposId={tiposId}

            errors={errors}

            touched={touched}

            setStep={setStep}



            mensajeCodigo={mensajeCodigo}

            codigo={codigo}

            setCodigo={(valor) => {

              setCodigo(valor);

              verificarCodigoCorreo(valor);

            }}

            correoVerificado={correoVerificado}

        

          />

        )}

        {step === 2 && (

          <StepTwo

            form={form}

            set={set}

            tipos={tipos}

            solicitudes={solicitudes}

            motivos={motivos}

            handleTipo={handleTipo}

            handleSolicitud={handleSolicitud}

            errors={errors}

            touched={touched}

            file={file}

            setFile={setFile}

            fileError={fileError}

            setFileError={setFileError}

            setStep={setStep}

          />

        )}

        {step === 3 && (

          <StepThree

            form={form}

            tipos={tipos}

            solicitudes={solicitudes}

            motivos={motivos}

            tiposId={tiposId}

            getNombre={getNombre}

            getTipoIdNombre={() =>
              getTipoIdNombre(
                tiposId,
                form.tipo_identificacion
              )
            }

            loading={loading}

            submit={submit}

            setStep={setStep}

          />

        )}

        {step === 4 && (

          <Success

            radicado={radicado}

          />

        )}

      </div>

    </div>

  );

}


