import React, { useRef, useState } from "react";
import "./components/components.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import AlertDialog from "./components/AlertDialog/AlertDialog";
import Grid from "./components/Grid/Grid";
import Input from "./components/Input/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  ClimbingBoxLoader,
  ClipLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
} from "react-spinners";
import {
  AdjustmentsHorizontalIcon,
  ArchiveBoxXMarkIcon,
  ArrowDownTrayIcon,
  ArrowLeftStartOnRectangleIcon,
  ArrowPathRoundedSquareIcon,
  ArrowTrendingUpIcon,
  ArrowUpTrayIcon,
  AtSymbolIcon,
  BellAlertIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  CloudIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  EyeSlashIcon,
  FunnelIcon,
  HomeIcon,
  LinkIcon,
  LockClosedIcon,
  LockOpenIcon,
  MapPinIcon,
  PencilIcon,
  PhotoIcon,
  PlusIcon,
  PrinterIcon,
  ShareIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  TicketIcon,
  TrashIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
import Select from "./components/Select/Select";
import ToastContainer, {
  ToastContainerHandle,
} from "./components/Toast/ToastContainer";

interface FormData {
  email: string;
  password: string;
}

const iconSize = 18;
const iconColor = "white";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const schema = z.object({
    email: z
      .string()
      .email("El correo electrónico debe ser válido")
      .min(1, "El correo electrónico es obligatorio"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(20, "La contraseña debe tener un máximo de 20 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(schema), // Conectamos Zod con React Hook Form
  });

  // Función que se ejecuta cuando el formulario se envía
  const onSubmit = (data: FormData) => {
    clearErrors(); // Limpia los errores del formulario
    console.log(data); // Aquí puedes manejar los datos del formulario
  };

  // Esquema de validación con Zod
  const schemaSelect = z.object({
    selectedOption: z.string().min(1, "Por favor selecciona una opción"),
  });

  // Tipo para el formulario
  interface FormDataSelect {
    selectedOption: string;
  }

  const toastContainerRef = useRef<ToastContainerHandle>(null);

  const handleShowToast = (type: "success" | "error" | "warning" | "info") => {
    if (toastContainerRef.current) {
      toastContainerRef.current.addToast(`Este es un mensaje de ${type}`, type);
    }
  };

  const {
    register: registerSelect,
    handleSubmit: handleSubmitSelect,
    formState: { errors: errorsSelect },
    clearErrors: clearErrorsSelect,
  } = useForm<FormDataSelect>({
    resolver: zodResolver(schemaSelect),
    defaultValues: {
      selectedOption: "", // Valor inicial vacío
    },
  });

  const onSubmitSelect = (data: FormDataSelect) => {
    console.log("Formulario enviado:", data);
  };

  const FormGeneral = () => {
    return (
      <React.Fragment>
        <Input
          label="Input con icono"
          type="email"
          placeholder="Escribe tu correo"
          {...register("email")}
          error={errors.email?.message}
          icon={
            <AtSymbolIcon
              color={iconColor}
              height={iconSize}
              width={iconSize}
            />
          }
        />

        <Input
          label="Input normal"
          type="password"
          placeholder="Escribe tu contraseña"
          {...register("password")}
          error={errors.password?.message}
        />
      </React.Fragment>
    );
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Grid columns={3}>
          <form onSubmit={handleSubmitSelect(onSubmitSelect)}>
            <Card
              title="Selector"
              subtitle="Diferentes selectores"
              primaryProps={{
                type: "submit",
              }}
              secondaryProps={{
                text: "Limpiar campos",
                onClick: () => clearErrorsSelect(),
              }}
              content={
                <Grid columns={1}>
                  <Select
                    label="Select normal"
                    options={[
                      { value: "option1", label: "Opción 1" },
                      { value: "option2", label: "Opción 2" },
                      { value: "option3", label: "Opción 3" },
                    ]}
                    {...registerSelect("selectedOption")} // Registra el campo en react-hook-form
                    error={errorsSelect.selectedOption?.message} // Muestra el mensaje de error si existe
                  />
                  <Select
                    label="Select con icono"
                    icon={
                      <EyeSlashIcon
                        color={iconColor}
                        height={iconSize}
                        width={iconSize}
                      />
                    }
                    options={[
                      { value: "option1", label: "Opción 1" },
                      { value: "option2", label: "Opción 2" },
                      { value: "option3", label: "Opción 3" },
                    ]}
                    {...registerSelect("selectedOption")} // Registra el campo en react-hook-form
                    error={errorsSelect.selectedOption?.message} // Muestra el mensaje de error si existe
                  />
                </Grid>
              }
            />
          </form>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Card
              title="Formulario"
              subtitle="Formulario con React Hook Form  y Zod"
              primaryProps={{
                type: "submit",
                text: "Iniciar sesión",
              }}
              secondaryProps={{
                text: "Limpiar campos",
                onClick: () => clearErrors(),
              }}
              content={<FormGeneral />}
            />
          </form>
          <Card
            title="Botones"
            subtitle="Diferentes tipos de botones"
            primaryProps={{
              visible: false,
            }}
            secondaryProps={{
              visible: false,
            }}
            content={
              <Grid columns={2}>
                <Button>Normal</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="cancel">Cancelar</Button>
                <Button variant="disabled">Deshabilitado</Button>
                <Button
                  iconProps={{
                    iconPosition: "left",
                    icon: (
                      <ArchiveBoxXMarkIcon
                        color="black"
                        height={18}
                        width={18}
                      />
                    ),
                  }}
                >
                  Icono
                </Button>
              </Grid>
            }
          />

          <Card
            title="Loader"
            subtitle="Diferentes loaders"
            primaryProps={{
              visible: false,
            }}
            secondaryProps={{
              visible: false,
            }}
            content={
              <Grid columns={2}>
                <BarLoader color="#fff" />
                <BeatLoader color="#fff" />
                <BounceLoader color="#fff" />
                <ClimbingBoxLoader color="#fff" />
                <ClipLoader color="#fff" />
                <MoonLoader color="#fff" />
                <HashLoader color="#fff" />
                <GridLoader color="#fff" />
              </Grid>
            }
          />
          <Card
            title="Iconos"
            subtitle="Diferentes Iconos"
            primaryProps={{
              visible: false,
            }}
            secondaryProps={{
              visible: false,
            }}
            content={
              <Grid columns={7}>
                <AdjustmentsHorizontalIcon
                  color={iconColor}
                  height={18}
                  width={18}
                />
                <HomeIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ArrowDownTrayIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ArrowLeftStartOnRectangleIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ArrowPathRoundedSquareIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ArrowTrendingUpIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ArrowUpTrayIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <AtSymbolIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <BellAlertIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ChatBubbleLeftRightIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <CheckIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ClipboardDocumentIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ClipboardDocumentCheckIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <CloudIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <CreditCardIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <Cog6ToothIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <EllipsisVerticalIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <EnvelopeIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ExclamationTriangleIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <EyeSlashIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <EyeIcon color={iconColor} height={iconSize} width={iconSize} />
                <FunnelIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <LinkIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <LockClosedIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <LockOpenIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <MapPinIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <PencilIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <PhotoIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <PlusIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <PrinterIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ShareIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ShoppingCartIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <ShieldCheckIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <TrashIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <TicketIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <UserIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
                <XMarkIcon
                  color={iconColor}
                  height={iconSize}
                  width={iconSize}
                />
              </Grid>
            }
          />
          <Card
            title="Alerta"
            subtitle="Alerta sencilla"
            primaryProps={{
              visible: false,
            }}
            secondaryProps={{
              visible: false,
            }}
            content={
              <Grid columns={2}>
                <div>
                  <Button onClick={() => setIsOpen(true)}>Abrir Alerta</Button>
                  <AlertDialog
                    title="¿Estás seguro?"
                    subtitle="Esta acción no se puede deshacer"
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    content={
                      <div>
                        <p>¿Estás seguro de que quieres continuar?</p>
                        <p>Esta acción no se puede deshacer</p>
                      </div>
                    }
                    primaryProps={{
                      text: "Aceptar",
                      onClick: () => setIsOpen(false),
                      type: "submit",
                      variant: "normal",
                    }}
                    secondaryProps={{
                      text: "Cancelar",
                      onClick: () => setIsOpen(false),
                      variant: "cancel",
                    }}
                  />
                </div>
              </Grid>
            }
          />
          <Card
            title="Toast"
            subtitle="Diferentes toasts"
            primaryProps={{
              visible: false,
            }}
            secondaryProps={{
              visible: false,
            }}
            content={
              <Grid columns={1}>
                <Button onClick={() => handleShowToast("success")}>
                  Mostrar Toast de Éxito
                </Button>
                <Button onClick={() => handleShowToast("error")}>
                  Mostrar Toast de Error
                </Button>
                <Button onClick={() => handleShowToast("warning")}>
                  Mostrar Toast de Advertencia
                </Button>
                <Button onClick={() => handleShowToast("info")}>
                  Mostrar Toast de Información
                </Button>
              </Grid>
            }
          />
        </Grid>
        <ToastContainer ref={toastContainerRef} />
      </main>
    </div>
  );
}

export default App;
