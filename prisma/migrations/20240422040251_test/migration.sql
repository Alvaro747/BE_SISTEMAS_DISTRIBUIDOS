-- CreateTable
CREATE TABLE "Rol" (
    "id" INTEGER NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persona" (
    "id" INTEGER NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "apellido" VARCHAR(50) NOT NULL,
    "documento_identidad" VARCHAR(50) NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "direccion" VARCHAR(100) NOT NULL,
    "correo_electronico" VARCHAR(50) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persona_role" (
    "id" INTEGER NOT NULL,
    "id_persona" INTEGER NOT NULL,
    "id_rol" INTEGER NOT NULL,

    CONSTRAINT "Persona_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historial_Atencion_Cliente" (
    "id_atencion" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_empleado" INTEGER NOT NULL,
    "fecha_atencion" TIMESTAMP(3) NOT NULL,
    "tipo_atencion" VARCHAR(50) NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Historial_Atencion_Cliente_pkey" PRIMARY KEY ("id_atencion")
);

-- CreateTable
CREATE TABLE "Tipo_transaccion" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Tipo_transaccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transacciones" (
    "id_transaccion" INTEGER NOT NULL,
    "id_persona" INTEGER NOT NULL,
    "id_tipo_transaccion" INTEGER NOT NULL,
    "monto" DECIMAL(10,2) NOT NULL,
    "fecha_transaccion" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Transacciones_pkey" PRIMARY KEY ("id_transaccion")
);

-- CreateTable
CREATE TABLE "Sucursales" (
    "id_sucursal" INTEGER NOT NULL,
    "nombre_sucursal" VARCHAR(50) NOT NULL,
    "ciudad" VARCHAR(20) NOT NULL,
    "departamento" VARCHAR(30) NOT NULL,
    "pais" VARCHAR(30) NOT NULL,
    "direccion" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,

    CONSTRAINT "Sucursales_pkey" PRIMARY KEY ("id_sucursal")
);

-- CreateTable
CREATE TABLE "Creditos" (
    "id_credito" INTEGER NOT NULL,
    "id_persona" INTEGER NOT NULL,
    "monto_original" DECIMAL(10,2) NOT NULL,
    "saldo_pendiente" DECIMAL(10,2) NOT NULL,
    "tasa_interes" DECIMAL(5,2) NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_finalizacion" TIMESTAMP(3) NOT NULL,
    "tipo_credito" VARCHAR(50) NOT NULL,
    "estado_credito" VARCHAR(50) NOT NULL,

    CONSTRAINT "Creditos_pkey" PRIMARY KEY ("id_credito")
);

-- CreateTable
CREATE TABLE "Tipo_cuenta" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Tipo_cuenta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cuentas" (
    "id_cuenta" INTEGER NOT NULL,
    "id_persona" INTEGER NOT NULL,
    "id_tipo_cuenta" INTEGER NOT NULL,
    "saldo_actual" DECIMAL(10,2) NOT NULL,
    "moneda" VARCHAR(10) NOT NULL,
    "fecha_apertura" TIMESTAMP(3) NOT NULL,
    "fecha_cierre" TIMESTAMP(3) NOT NULL,
    "estado_cuenta" VARCHAR(50) NOT NULL,
    "beneficios" VARCHAR(200) NOT NULL,

    CONSTRAINT "Cuentas_pkey" PRIMARY KEY ("id_cuenta")
);

-- CreateTable
CREATE TABLE "Tipo_tarjeta" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Tipo_tarjeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tarjetas" (
    "id_tarjeta" INTEGER NOT NULL,
    "id_persona" INTEGER NOT NULL,
    "id_tipo_tarjeta" INTEGER NOT NULL,
    "numero_tarjeta" VARCHAR(16) NOT NULL,
    "ultimos_digitos" VARCHAR(4) NOT NULL,
    "nombre_titular" VARCHAR(50) NOT NULL,
    "fecha_emision" TIMESTAMP(3) NOT NULL,
    "fecha_vencimiento" TIMESTAMP(3) NOT NULL,
    "fecha_corte" TIMESTAMP(3) NOT NULL,
    "cupo_total" DECIMAL(10,2) NOT NULL,
    "cupo_disponible" DECIMAL(10,2) NOT NULL,
    "saldo_actual" DECIMAL(10,2) NOT NULL,
    "tasa_interes" DECIMAL(5,2) NOT NULL,
    "estado_tarjeta" VARCHAR(50) NOT NULL,
    "cvv" VARCHAR(3) NOT NULL,
    "pago_minimo" DECIMAL(10,2) NOT NULL,
    "pago_total" DECIMAL(10,2) NOT NULL,
    "pago_anticipado" DECIMAL(10,2) NOT NULL,
    "programa_puntos" VARCHAR(200) NOT NULL,

    CONSTRAINT "Tarjetas_pkey" PRIMARY KEY ("id_tarjeta")
);

-- AddForeignKey
ALTER TABLE "Persona_role" ADD CONSTRAINT "Persona_role_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Persona_role" ADD CONSTRAINT "Persona_role_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historial_Atencion_Cliente" ADD CONSTRAINT "Historial_Atencion_Cliente_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "Persona_role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transacciones" ADD CONSTRAINT "Transacciones_id_tipo_transaccion_fkey" FOREIGN KEY ("id_tipo_transaccion") REFERENCES "Tipo_transaccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transacciones" ADD CONSTRAINT "Transacciones_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creditos" ADD CONSTRAINT "Creditos_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuentas" ADD CONSTRAINT "Cuentas_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuentas" ADD CONSTRAINT "Cuentas_id_tipo_cuenta_fkey" FOREIGN KEY ("id_tipo_cuenta") REFERENCES "Tipo_cuenta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarjetas" ADD CONSTRAINT "Tarjetas_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarjetas" ADD CONSTRAINT "Tarjetas_id_tipo_tarjeta_fkey" FOREIGN KEY ("id_tipo_tarjeta") REFERENCES "Tipo_tarjeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
