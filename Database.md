# SENTENCIA SQL PARA GREAR LA DB:

```
sql

-- Crear la tabla Rol
CREATE TABLE Rol (
    id INT PRIMARY KEY,
    nombre VARCHAR(50)
);

-- Crear la tabla Personas
CREATE TABLE Persona (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    documento_identidad VARCHAR(50),
    fecha_nacimiento DATE,
    direccion VARCHAR(100),
    correo_electronico VARCHAR(50),
    telefono VARCHAR(20)
);

-- Crear la relacion entre persona y rollback
CREATE TABLE Persona_role(
id INT primary key,
id_persona int,
id_rol int,
foreign key (id_persona) references Persona(id),
foreign key (id_rol) references Rol(id)
);
------------------------------------------

CREATE TABLE Historial_Atencion_Cliente (
    id_atencion INT PRIMARY KEY,
    id_cliente INT,
    id_empleado INT,
    fecha_atencion TIMESTAMP,
    tipo_atencion VARCHAR(50),
    descripcion TEXT,
    FOREIGN KEY (id_cliente) REFERENCES Persona_role(id),
    FOREIGN KEY (id_empleado) REFERENCES Persona_role(id)
);

Create table Tipo_transaccion(
id int primary key,
name varchar(20)
);


-- Crear la tabla Transacciones
CREATE TABLE Transacciones (
    id_transaccion INT PRIMARY KEY,
    id_persona INT,
    id_tipo_transaccion int,
    monto DECIMAL(10, 2),
    fecha_transaccion TIMESTAMP,
    descripcion TEXT,
    foreign key (id_tipo_transaccion) references Tipo_transaccion(id),
    foreign key (id_persona) references Persona(id)
);

-- Crear la tabla Sucursales
CREATE TABLE Sucursales (
    id_sucursal INT PRIMARY KEY,
    nombre_sucursal VARCHAR(50),
    ciudad VARCHAR(20),
    departamento VARCHAR(30),
    pais VARCHAR(30),
    direccion VARCHAR(100),
    telefono VARCHAR(20)
);

-- Crear la tabla Creditos
CREATE TABLE Creditos (
    id_credito INT PRIMARY KEY,
    id_persona INT,
    monto_original DECIMAL(10, 2),
    saldo_pendiente DECIMAL(10, 2),
    tasa_interes DECIMAL(5, 2),
    fecha_inicio DATE,
    fecha_finalizacion DATE,
    tipo_credito VARCHAR(50),
    estado_credito VARCHAR(50),
     foreign key (id_persona) references Persona(id)
);

-- Crear tipo de cuenta
CREATE TABLE Tipo_cuenta(
id int primary key,
name varchar(20)
);

-- Crear la tabla Cuentas
CREATE TABLE Cuentas (
    id_cuenta INT PRIMARY KEY,
    id_persona INT,
    id_tipo_cuenta int,
    saldo_actual DECIMAL(10, 2),
    moneda VARCHAR(10),
    fecha_apertura DATE,
    fecha_cierre DATE,
    estado_cuenta VARCHAR(50),
    beneficios varchar(200),
	foreign key (id_persona) references Persona(id),
    foreign key (id_tipo_cuenta) references Tipo_cuenta(id)
);

-- crear tipo de tarjeta
CREATE TABLE Tipo_tarjeta(
id INT PRIMARY KEY,
name varchar(20)
);

-- Crear la tabla Tarjetas
CREATE TABLE Tarjetas (
    id_tarjeta INT PRIMARY KEY,
    id_persona INT,
    id_tipo_tarjeta int,
    numero_tarjeta VARCHAR(16),
    ultimos_digitos varchar(4),
    nombre_titular VARCHAR(50),
    fecha_emision DATE,
    fecha_vencimiento DATE,
    fecha_corte DATE,
    cupo_total DECIMAL(10, 2),
    cupo_disponible DECIMAL(10, 2),
    saldo_actual DECIMAL(10, 2),
    tasa_interes DECIMAL(5, 2),
    estado_tarjeta VARCHAR(50),
    cvv VARCHAR(3),
    pago_minimo DECIMAL(10, 2),
    pago_total DECIMAL(10, 2),
    pago_anticipado DECIMAL(10, 2),
    programa_puntos VARCHAR(200),
	foreign key (id_persona) references Persona(id),
    foreign key (id_tipo_tarjeta) references Tipo_tarjeta(id)
);
```

## LLENAR DATOS SUCURSALES:
```
sql

INSERT INTO Sucursales (id_sucursal, nombre_sucursal, ciudad, departamento, pais, direccion, telefono) VALUES
(1, 'Sucursal Principal', 'CDMX', 'Ciudad de México', 'México', 'Av. Paseo de la Reforma 123', '+52 55 1234 5678'),
(2, 'Sucursal Monterrey Norte', 'Monterrey', 'Nuevo León', 'México', 'Av. Constitución 456', '+52 81 8765 4321'),
(3, 'Sucursal Guadalajara Sur', 'Guadalajara', 'Jalisco', 'México', 'Av. Chapultepec Sur 789', '+52 33 2468 1357'),
(4, 'Sucursal Veracruz Este', 'Veracruz', 'Veracruz', 'México', 'Blvd. Miguel Alemán 101', '+52 229 9876 5432'),
(5, 'Sucursal Guadalajara Oeste', 'Guadalajara', 'Jalisco', 'México', 'Av. Vallarta 210', '+52 33 7654 3210'),
(6, 'Sucursal Bogotá Centro', 'Bogotá', 'Cundinamarca', 'Colombia', 'Calle 72 #10-07', '+57 1 234 5678'),
(7, 'Sucursal Medellín Norte', 'Medellín', 'Antioquia', 'Colombia', 'Carrera 43A #6S-15', '+57 4 8765 4321'),
(8, 'Sucursal Cali Este', 'Cali', 'Valle del Cauca', 'Colombia', 'Calle 9 #20-40', '+57 2 2468 1357'),
(9, 'Sucursal Barranquilla Oeste', 'Barranquilla', 'Atlántico', 'Colombia', 'Cra. 50 #85-56', '+57 5 9876 5432'),
(10, 'Sucursal Lima Centro', 'Lima', 'Lima', 'Perú', 'Av. Javier Prado Este 123', '+51 1 1234 5678'),
(11, 'Sucursal Arequipa Norte', 'Arequipa', 'Arequipa', 'Perú', 'Calle Mercaderes 456', '+51 54 8765 4321'),
(12, 'Sucursal Trujillo Sur', 'Trujillo', 'La Libertad', 'Perú', 'Av. España 789', '+51 44 2468 1357'),
(13, 'Sucursal Chiclayo Este', 'Chiclayo', 'Lambayeque', 'Perú', 'Av. Balta 101', '+51 74 9876 5432'),
(14, 'Sucursal Santiago Centro', 'Santiago', 'Metropolitana', 'Chile', 'Av. Providencia 123', '+56 2 1234 5678'),
(15, 'Sucursal Valparaíso Oeste', 'Valparaíso', 'Valparaíso', 'Chile', 'Calle Serrano 456', '+56 32 8765 4321'),
(16, 'Sucursal Concepción Sur', 'Concepción', 'Bío Bío', 'Chile', 'Av. Los Carrera 789', '+56 41 2468 1357'),
(17, 'Sucursal Antofagasta Este', 'Antofagasta', 'Antofagasta', 'Chile', 'Av. Argentina 101', '+56 55 9876 5432'),
(18, 'Sucursal Buenos Aires Centro', 'Buenos Aires', 'Buenos Aires', 'Argentina', 'Av. Corrientes 123', '+54 11 1234 5678'),
(19, 'Sucursal Córdoba Norte', 'Córdoba', 'Córdoba', 'Argentina', 'Av. Colón 456', '+54 351 8765 4321'),
(20, 'Sucursal La Paz Centro', 'La Paz', 'La Paz', 'Bolivia', 'Calle Comercio 789', '+591 2 2468 1357'),
(21, 'Sucursal Santa Cruz Este', 'Santa Cruz', 'Santa Cruz', 'Bolivia', 'Av. Monseñor Rivero 101', '+591 3 9876 5432'),
(22, 'Sucursal Quito Norte', 'Quito', 'Pichincha', 'Ecuador', 'Av. Amazonas N31-105', '+593 2 1234 5678'),
(23, 'Sucursal Guayaquil Oeste', 'Guayaquil', 'Guayas', 'Ecuador', 'Av. 9 de Octubre 456', '+593 4 8765 4321'),
(24, 'Sucursal Caracas Centro', 'Caracas', 'Distrito Capital', 'Venezuela', 'Av. Bolívar 789', '+58 212 2468 1357'),
(25, 'Sucursal Maracaibo Norte', 'Maracaibo', 'Zulia', 'Venezuela', 'Av. Bella Vista 101', '+58 261 9876 5432'),
(26, 'Sucursal San José Centro', 'San José', 'San José', 'Costa Rica', 'Calle Central 123', '+506 2 1234 5678'),
(27, 'Sucursal San Salvador Este', 'San Salvador', 'San Salvador', 'El Salvador', 'Blvd. de los Héroes 456', '+503 2 8765 4321'),
(28, 'Sucursal Tegucigalpa Sur', 'Tegucigalpa', 'Francisco Morazán', 'Honduras', 'Av. República de Argentina 789', '+504 2 2468 1357'),
(29, 'Sucursal Managua Oeste', 'Managua', 'Managua', 'Nicaragua', 'Av. Bolívar 101', '+505 2 9876 5432'),
(30, 'Sucursal San Juan Centro', 'San Juan', 'San Juan', 'Puerto Rico', 'Av. Ponce de León 123', '+1 787 1234 5678');
```


## insertar personas:

```
sql

INSERT INTO Persona (id, nombre, apellido, documento_identidad, fecha_nacimiento, direccion, correo_electronico, telefono) VALUES
(1, 'Juan', 'García', '123456789', '1990-05-15', 'Av. Libertador 123', 'juan.garcia@example.com', '+52 55 1234 5678'),
(2, 'María', 'Martínez', '234567890', '1985-08-21', 'Calle del Sol 456', 'maria.martinez@example.com', '+52 81 8765 4321'),
(3, 'Pedro', 'López', '345678901', '1982-03-10', 'Av. Central 789', 'pedro.lopez@example.com', '+57 1 234 5678'),
(4, 'Ana', 'Rodríguez', '456789012', '1995-11-03', 'Calle de la Luna 101', 'ana.rodriguez@example.com', '+57 4 8765 4321'),
(5, 'Carlos', 'Gómez', '567890123', '1988-07-29', 'Av. Principal 210', 'carlos.gomez@example.com', '+51 1 1234 5678'),
(6, 'Laura', 'Sánchez', '678901234', '1993-09-17', 'Calle de los Pinos 789', 'laura.sanchez@example.com', '+56 2 1234 5678'),
(7, 'José', 'Pérez', '789012345', '1980-02-28', 'Av. Independencia 456', 'jose.perez@example.com', '+54 11 1234 5678'),
(8, 'Sofía', 'Hernández', '890123456', '1991-06-12', 'Calle Mayor 123', 'sofia.hernandez@example.com', '+591 2 2468 1357'),
(9, 'Daniel', 'Díaz', '901234567', '1987-04-05', 'Av. Bolívar 456', 'daniel.diaz@example.com', '+58 212 2468 1357'),
(10, 'Elena', 'Gutiérrez', '012345678', '1994-10-19', 'Carrera 7 789', 'elena.gutierrez@example.com', '+506 2 1234 5678'),
(11, 'Miguel', 'Romero', '123456789', '1983-12-25', 'Av. de los Robles 101', 'miguel.romero@example.com', '+503 2 8765 4321'),
(12, 'Paula', 'Alvarez', '234567890', '1990-08-08', 'Calle de las Flores 123', 'paula.alvarez@example.com', '+504 2 2468 1357'),
(13, 'Fernando', 'González', '345678901', '1984-05-30', 'Av. de los Ángeles 789', 'fernando.gonzalez@example.com', '+505 2 9876 5432'),
(14, 'Lucía', 'Torres', '456789012', '1997-03-18', 'Calle de los Olivos 101', 'lucia.torres@example.com', '+506 2 3456 7890'),
(15, 'Martín', 'Santos', '567890123', '1989-09-05', 'Av. del Sol 456', 'martin.santos@example.com', '+507 2 6789 0123'),
(16, 'Eva', 'Ortega', '678901234', '1992-11-22', 'Calle de la Playa 123', 'eva.ortega@example.com', '+502 2 3456 7890'),
(17, 'Javier', 'Ruiz', '789012345', '1981-07-14', 'Av. de las Palmeras 789', 'javier.ruiz@example.com', '+504 2 5678 9012'),
(18, 'Isabel', 'García', '890123456', '1986-04-03', 'Calle del Río 101', 'isabel.garcia@example.com', '+502 2 3456 7890'),
(19, 'Diego', 'Moreno', '901234567', '1993-01-27', 'Av. de la Montaña 123', 'diego.moreno@example.com', '+503 2 5678 9012'),
(20, 'Natalia', 'Jiménez', '012345678', '1984-08-14', 'Calle del Campo 456', 'natalia.jimenez@example.com', '+504 2 7890 1234'),
(21, 'Alejandro', 'Martín', '123456789', '1990-06-19', 'Av. del Bosque 789', 'alejandro.martin@example.com', '+506 2 9012 3456'),
(22, 'Carmen', 'Sánchez', '234567890', '1987-02-09', 'Calle de la Fuente 101', 'carmen.sanchez@example.com', '+507 2 1234 5678'),
(23, 'Gabriel', 'Hernández', '345678901', '1994-10-08', 'Av. de la Estrella 123', 'gabriel.hernandez@example.com', '+502 2 5678 9012'),
(24, 'Adriana', 'Gómez', '456789012', '1983-11-29', 'Calle del Lago 456', 'adriana.gomez@example.com', '+504 2 9012 3456'),
(25, 'Hugo', 'Rodríguez', '567890123', '1998-05-02', 'Av. de las Flores 789', 'hugo.rodriguez@example.com', '+505 2 1234 5678'),
(26, 'Ana', 'Martínez', '678901234', '1980-09-16', 'Calle del Mar 101', 'ana.martinez@example.com', '+502 2 3456 7890'),
(27, 'Santiago', 'Pérez', '789012345', '1985-12-11', 'Av. del Cielo 123', 'santiago.perez@example.com', '+507 2 5678 9012'),
(28, 'Valentina', 'López', '890123456', '1992-04-24', 'Calle de la Montaña 456', 'valentina.lopez@example.com', '+506 2 7890 1234'),
(29, 'Pablo', 'Santos', '901234567', '1981-08-07', 'Av. del Océano 789', 'pablo.santos@example.com', '+503 2 9012 3456'),
(30, 'Luisa', 'González', '012345678', '1990-03-03', 'Calle de la Selva 101', 'luisa.gonzalez@example.com', '+504 2 1234 5678');
```

## insertar roles

```
sql

INSERT INTO Rol (id, nombre)
VALUES
(1, 'cliente'),
(2, 'empleado');
```

## insertar datos en persona_rol

```
sql

INSERT INTO Persona_role (id, id_persona, id_rol)
VALUES
(1, 1, 1),  -- Juan García - Cliente
(2, 2, 1),  -- María Martínez - Cliente
(3, 3, 2),  -- Pedro López - Empleado
(4, 4, 2),  -- Ana Rodríguez - Empleado
(5, 5, 1),  -- Carlos Gómez - Cliente
(6, 6, 2),  -- Laura Sánchez - Empleado
(7, 7, 2),  -- José Pérez - Empleado
(8, 8, 1),  -- Sofía Hernández - Cliente
(9, 9, 2),  -- Daniel Díaz - Empleado
(10, 10, 1), -- Elena Gutiérrez - Cliente
(11, 11, 2), -- Miguel Romero - Empleado
(12, 12, 1), -- Paula Alvarez - Cliente
(13, 13, 2), -- Fernando González - Empleado
(14, 14, 1), -- Lucía Torres - Cliente
(15, 15, 2), -- Martín Santos - Empleado
(16, 16, 1), -- Eva Ortega - Cliente
(17, 17, 2), -- Javier Ruiz - Empleado
(18, 18, 1), -- Isabel García - Cliente
(19, 19, 2), -- Diego Moreno - Empleado
(20, 20, 1), -- Natalia Jiménez - Cliente
(21, 21, 2), -- Alejandro Martín - Empleado
(22, 22, 1), -- Carmen Sánchez - Cliente
(23, 23, 2), -- Gabriel Hernández - Empleado
(24, 24, 1), -- Adriana Gómez - Cliente
(25, 25, 2), -- Hugo Rodríguez - Empleado
(26, 26, 1), -- Ana Martínez - Cliente
(27, 27, 2), -- Santiago Pérez - Empleado
(28, 28, 1), -- Valentina López - Cliente
(29, 29, 2), -- Pablo Santos - Empleado
(30, 30, 1); -- Luisa González - Cliente

```

## insertar creditos

```
sql 

INSERT INTO Creditos (id_credito, id_persona, monto_original, saldo_pendiente, tasa_interes, fecha_inicio, fecha_finalizacion, tipo_credito, estado_credito)
VALUES
(1, 1, 10000.00, 5000.00, 5.5, '2023-01-15', '2023-07-15', 'Préstamo personal', 'Activo'), -- Juan García
(2, 2, 15000.00, 7500.00, 6.0, '2023-02-20', '2023-08-20', 'Hipoteca', 'Activo'), -- María Martínez
(3, 3, 8000.00, 4000.00, 5.0, '2023-03-10', '2023-09-10', 'Préstamo automotriz', 'Activo'), -- Pedro López
(4, 4, 12000.00, 6000.00, 5.75, '2023-04-05', '2023-10-05', 'Préstamo personal', 'Activo'), -- Ana Rodríguez
(5, 5, 20000.00, 10000.00, 6.25, '2023-05-01', '2023-11-01', 'Préstamo hipotecario', 'Activo'), -- Carlos Gómez
(6, 6, 10000.00, 5000.00, 5.5, '2023-06-15', '2023-12-15', 'Préstamo personal', 'Activo'), -- Laura Sánchez
(7, 7, 15000.00, 7500.00, 6.0, '2023-07-20', '2024-01-20', 'Préstamo hipotecario', 'Activo'), -- José Pérez
(8, 8, 8000.00, 4000.00, 5.0, '2023-08-10', '2024-02-10', 'Préstamo automotriz', 'Activo'), -- Sofía Hernández
(9, 9, 12000.00, 6000.00, 5.75, '2023-09-05', '2024-03-05', 'Préstamo personal', 'Activo'), -- Daniel Díaz
(10, 10, 20000.00, 10000.00, 6.25, '2023-10-01', '2024-04-01', 'Préstamo hipotecario', 'Activo'), -- Elena Gutiérrez
(11, 11, 10000.00, 5000.00, 5.5, '2023-11-15', '2024-05-15', 'Préstamo personal', 'Activo'), -- Miguel Romero
(12, 12, 15000.00, 7500.00, 6.0, '2023-12-20', '2024-06-20', 'Préstamo hipotecario', 'Activo'), -- Paula Alvarez
(13, 13, 8000.00, 4000.00, 5.0, '2024-01-10', '2024-07-10', 'Préstamo automotriz', 'Activo'), -- Fernando González
(14, 14, 12000.00, 6000.00, 5.75, '2024-02-05', '2024-08-05', 'Préstamo personal', 'Activo'), -- Lucía Torres
(15, 15, 20000.00, 10000.00, 6.25, '2024-03-01', '2024-09-01', 'Préstamo hipotecario', 'Activo'), -- Martín Santos
(16, 16, 10000.00, 5000.00, 5.5, '2024-04-15', '2024-10-15', 'Préstamo personal', 'Activo'), -- Eva Ortega
(17, 17, 15000.00, 7500.00, 6.0, '2024-05-20', '2024-11-20', 'Préstamo hipotecario', 'Activo'), -- Javier Ruiz
(18, 18, 8000.00, 4000.00, 5.0, '2024-06-10', '2024-12-10', 'Préstamo automotriz', 'Activo'), -- Isabel García
(19, 19, 12000.00, 6000.00, 5.75, '2024-07-05', '2025-01-05', 'Préstamo personal', 'Activo'), -- Diego Moreno
(20, 20, 20000.00, 10000.00, 6.25, '2024-08-01', '2025-02-01', 'Préstamo hipotecario', 'Activo'), -- Natalia Jiménez
(21, 21, 10000.00, 5000.00, 5.5, '2024-09-15', '2025-03-15', 'Préstamo personal', 'Activo'), -- Alejandro Martín
(22, 22, 15000.00, 7500.00, 6.0, '2024-10-20', '2025-04-20', 'Préstamo hipotecario', 'Activo'), -- Carmen Sánchez
(23, 23, 8000.00, 4000.00, 5.0, '2024-11-10', '2025-05-10', 'Préstamo automotriz', 'Activo'), -- Gabriel Hernández
(24, 24, 12000.00, 6000.00, 5.75, '2024-12-05', '2025-06-05', 'Préstamo personal', 'Activo'), -- Adriana Gómez
(25, 25, 20000.00, 10000.00, 6.25, '2025-01-01', '2025-07-01', 'Préstamo hipotecario', 'Activo'), -- Hugo Rodríguez
(26, 26, 10000.00, 5000.00, 5.5, '2025-02-15', '2025-08-15', 'Préstamo personal', 'Activo'), -- Ana Martínez
(27, 27, 15000.00, 7500.00, 6.0, '2025-03-20', '2025-09-20', 'Préstamo hipotecario', 'Activo'), -- Santiago Pérez
(28, 28, 8000.00, 4000.00, 5.0, '2025-04-10', '2025-10-10', 'Préstamo automotriz', 'Activo'), -- Valentina López
(29, 29, 12000.00, 6000.00, 5.75, '2025-05-05', '2025-11-05', 'Préstamo personal', 'Activo'), -- Pablo Santos
(30, 30, 20000.00, 10000.00, 6.25, '2025-06-01', '2025-12-01', 'Préstamo hipotecario', 'Activo'); -- Luisa González
```

## insertar tipo de tarjeta
```
sql

INSERT INTO Tipo_tarjeta (id, name)
VALUES
(1, 'crédito'),
(2, 'débito');
```

## insertar tipo de cuenta

```
sql

INSERT INTO Tipo_cuenta (id, name)
VALUES
(1, 'ahorros'),
(2, 'corriente');
```

## insertar tarjetas
```
sql

INSERT INTO Tarjetas (id_tarjeta, id_persona, id_tipo_tarjeta, numero_tarjeta, ultimos_digitos, nombre_titular, fecha_emision, fecha_vencimiento, fecha_corte, cupo_total, cupo_disponible, saldo_actual, tasa_interes, estado_tarjeta, cvv, pago_minimo, pago_total, pago_anticipado, programa_puntos)
VALUES
(1, 1, 1, '1234567812345678', '5678', 'Juan García', '2023-01-01', '2025-01-01', '2023-01-15', 10000.00, 8000.00, 2000.00, 15.0, 'Activa', '123', 100.00, 200.00, 0.00, 'Programa de recompensas A'), -- Juan García - Tarjeta de crédito
(2, 2, 1, '2345678923456789', '6789', 'María Martínez', '2023-02-01', '2025-02-01', '2023-02-20', 15000.00, 12000.00, 3000.00, 16.0, 'Activa', '234', 150.00, 300.00, 0.00, 'Programa de recompensas B'), -- María Martínez - Tarjeta de crédito
(3, 3, 1, '3456789034567890', '7890', 'Pedro López', '2023-03-01', '2025-03-01', '2023-03-10', 8000.00, 6400.00, 1600.00, 14.5, 'Activa', '345', 80.00, 160.00, 0.00, 'Programa de recompensas C'), -- Pedro López - Tarjeta de crédito
(4, 4, 2, '4567890145678901', '9012', 'Ana Rodríguez', '2023-04-01', '2025-04-01', '2023-04-05', 12000.00, 9600.00, 2400.00, 14.0, 'Activa', '456', 120.00, 240.00, 0.00, NULL), -- Ana Rodríguez - Tarjeta de débito
(5, 5, 1, '5678901256789012', '0123', 'Carlos Gómez', '2023-05-01', '2025-05-01', '2023-05-01', 20000.00, 16000.00, 4000.00, 15.5, 'Activa', '567', 200.00, 400.00, 0.00, 'Programa de recompensas A'), -- Carlos Gómez - Tarjeta de crédito
(6, 6, 2, '6789012367890123', '1234', 'Laura Sánchez', '2023-06-01', '2025-06-01', '2023-06-15', 10000.00, 8000.00, 2000.00, 14.5, 'Activa', '678', 100.00, 200.00, 0.00, NULL), -- Laura Sánchez - Tarjeta de débito
(7, 7, 1, '7890123478901234', '2345', 'José Pérez', '2023-07-01', '2025-07-01', '2023-07-20', 15000.00, 12000.00, 3000.00, 16.0, 'Activa', '789', 150.00, 300.00, 0.00, 'Programa de recompensas B'), -- José Pérez - Tarjeta de crédito
(8, 8, 2, '8901234589012345', '3456', 'Sofía Hernández', '2023-08-01', '2025-08-01', '2023-08-10', 8000.00, 6400.00, 1600.00, 14.0, 'Activa', '890', 80.00, 160.00, 0.00, NULL), -- Sofía Hernández - Tarjeta de débito
(9, 9, 1, '9012345690123456', '4567', 'Daniel Díaz', '2023-09-01', '2025-09-01', '2023-09-05', 12000.00, 9600.00, 2400.00, 15.0, 'Activa', '901', 120.00, 240.00, 0.00, 'Programa de recompensas C'), -- Daniel Díaz - Tarjeta de crédito
(10, 10, 2, '0123456701234567', '5678', 'Elena Gutiérrez', '2023-10-01', '2025-10-01', '2023-10-15', 20000.00, 16000.00, 4000.00, 14.5, 'Activa', '012', 200.00, 400.00, 0.00, NULL), -- Elena Gutiérrez - Tarjeta de débito
(11, 11, 1, '1234567812345678', '6789', 'Miguel Romero', '2023-11-01', '2025-11-01', '2023-11-15', 10000.00, 8000.00, 2000.00, 16.0, 'Activa', '123', 100.00, 200.00, 0.00, 'Programa de recompensas A'), -- Miguel Romero - Tarjeta de crédito
(12, 12, 2, '2345678923456789', '7890', 'Paula Alvarez', '2023-12-01', '2025-12-01', '2023-12-20', 15000.00, 12000.00, 3000.00, 14.5, 'Activa', '234', 150.00, 300.00, 0.00, NULL), -- Paula Alvarez - Tarjeta de débito
(13, 13, 1, '3456789034567890', '9012', 'Fernando González', '2024-01-01', '2026-01-01', '2024-01-10', 8000.00, 6400.00, 1600.00, 15.0, 'Activa', '345', 80.00, 160.00, 0.00, 'Programa de recompensas B'), -- Fernando González - Tarjeta de crédito
(14, 14, 2, '4567890145678901', '0123', 'Lucía Torres', '2024-02-01', '2026-02-01', '2024-02-05', 12000.00, 9600.00, 2400.00, 14.0, 'Activa', '456', 120.00, 240.00, 0.00, NULL), -- Lucía Torres - Tarjeta de débito
(15, 15, 1, '5678901256789012', '1234', 'Martín Santos', '2024-03-01', '2026-03-01', '2024-03-01', 20000.00, 16000.00, 4000.00, 15.5, 'Activa', '567', 200.00, 400.00, 0.00, 'Programa de recompensas C'), -- Martín Santos - Tarjeta de crédito
(16, 16, 2, '6789012367890123', '2345', 'Eva Ortega', '2024-04-01', '2026-04-01', '2024-04-15', 10000.00, 8000.00, 2000.00, 14.5, 'Activa', '678', 100.00, 200.00, 0.00, NULL), -- Eva Ortega - Tarjeta de débito
(17, 17, 1, '7890123478901234', '3456', 'Javier Ruiz', '2024-05-01', '2026-05-01', '2024-05-20', 15000.00, 12000.00, 3000.00, 16.0, 'Activa', '789', 150.00, 300.00, 0.00, 'Programa de recompensas A'), -- Javier Ruiz - Tarjeta de crédito
(18, 18, 2, '8901234589012345', '4567', 'Isabel García', '2024-06-01', '2026-06-01', '2024-06-10', 8000.00, 6400.00, 1600.00, 14.0, 'Activa', '890', 80.00, 160.00, 0.00, NULL), -- Isabel García - Tarjeta de débito
(19, 19, 1, '9012345690123456', '5678', 'Diego Moreno', '2024-07-01', '2026-07-01', '2024-07-05', 12000.00, 9600.00, 2400.00, 15.0, 'Activa', '901', 120.00, 240.00, 0.00, 'Programa de recompensas B'), -- Diego Moreno - Tarjeta de crédito
(20, 20, 2, '0123456701234567', '6789', 'Natalia Jiménez', '2024-08-01', '2026-08-01', '2024-08-15', 20000.00, 16000.00, 4000.00, 14.5, 'Activa', '012', 200.00, 400.00, 0.00, NULL), -- Natalia Jiménez - Tarjeta de débito
(21, 21, 1, '1234567812345678', '7890', 'Alejandro Martín', '2024-09-01', '2026-09-01', '2024-09-15', 10000.00, 8000.00, 2000.00, 16.0, 'Activa', '123', 100.00, 200.00, 0.00, 'Programa de recompensas A'), -- Alejandro Martín - Tarjeta de crédito
(22, 22, 2, '2345678923456789', '8901', 'Carmen Sánchez', '2024-10-01', '2026-10-01', '2024-10-20', 15000.00, 12000.00, 3000.00, 14.5, 'Activa', '234', 150.00, 300.00, 0.00, NULL), -- Carmen Sánchez - Tarjeta de débito
(23, 23, 1, '3456789034567890', '9012', 'Gabriel Hernández', '2024-11-01', '2026-11-01', '2024-11-10', 8000.00, 6400.00, 1600.00, 15.0, 'Activa', '345', 80.00, 160.00, 0.00, 'Programa de recompensas B'), -- Gabriel Hernández - Tarjeta de crédito
(24, 24, 2, '4567890145678901', '0123', 'Adriana Gómez', '2024-12-01', '2026-12-01', '2024-12-05', 12000.00, 9600.00, 2400.00, 14.0, 'Activa', '456', 120.00, 240.00, 0.00, NULL), -- Adriana Gómez - Tarjeta de débito
(25, 25, 1, '5678901256789012', '1234', 'Hugo Rodríguez', '2025-01-01', '2027-01-01', '2025-01-01', 20000.00, 16000.00, 4000.00, 15.5, 'Activa', '567', 200.00, 400.00, 0.00, 'Programa de recompensas C'), -- Hugo Rodríguez - Tarjeta de crédito
(26, 26, 2, '6789012367890123', '2345', 'Ana Martínez', '2025-02-01', '2027-02-01', '2025-02-15', 10000.00, 8000.00, 2000.00, 14.5, 'Activa', '678', 100.00, 200.00, 0.00, NULL), -- Ana Martínez - Tarjeta de débito
(27, 27, 1, '7890123478901234', '3456', 'Santiago Pérez', '2025-03-01', '2027-03-01', '2025-03-20', 15000.00, 12000.00, 3000.00, 16.0, 'Activa', '789', 150.00, 300.00, 0.00, 'Programa de recompensas A'), -- Santiago Pérez - Tarjeta de crédito
(28, 28, 2, '8901234589012345', '4567', 'Valentina López', '2025-04-01', '2027-04-01', '2025-04-10', 8000.00, 6400.00, 1600.00, 14.0, 'Activa', '890', 80.00, 160.00, 0.00, NULL), -- Valentina López - Tarjeta de débito
(29, 29, 1, '9012345690123456', '5678', 'Pablo Santos', '2025-05-01', '2027-05-01', '2025-05-05', 12000.00, 9600.00, 2400.00, 15.0, 'Activa', '901', 120.00, 240.00, 0.00, 'Programa de recompensas B'), -- Pablo Santos - Tarjeta de crédito
(30, 30, 2, '0123456701234567', '6789', 'Luisa González', '2025-06-01', '2027-06-01', '2025-06-15', 20000.00, 16000.00, 4000.00, 14.5, 'Activa', '012', 200.00, 400.00, 0.00, NULL); -- Luisa González - Tarjeta de débito

```
## insertar cuentas 

```
sql

INSERT INTO Cuentas (id_cuenta, id_persona, id_tipo_cuenta, saldo_actual, moneda, fecha_apertura, fecha_cierre, estado_cuenta, beneficios)
VALUES
(1, 1, 1, 5000.00, 'USD', '2020-01-01', NULL, 'Activa', 'Transferencias sin costo'), -- Juan García - Cuenta de ahorros
(2, 2, 2, 8000.00, 'USD', '2019-05-15', NULL, 'Activa', 'Sin comisiones por transacciones'), -- María Martínez - Cuenta corriente
(3, 3, 1, 3000.00, 'USD', '2020-10-20', NULL, 'Activa', 'Acceso a cajeros automáticos sin cargo'), -- Pedro López - Cuenta de ahorros
(4, 4, 2, 7000.00, 'USD', '2018-03-10', NULL, 'Activa', 'Servicio de chequera sin costo'), -- Ana Rodríguez - Cuenta corriente
(5, 5, 1, 10000.00, 'USD', '2021-07-29', NULL, 'Activa', 'Intereses mensuales'), -- Carlos Gómez - Cuenta de ahorros
(6, 6, 2, 6000.00, 'USD', '2019-09-17', NULL, 'Activa', 'Sin límite de transacciones mensuales'), -- Laura Sánchez - Cuenta corriente
(7, 7, 1, 4000.00, 'USD', '2021-02-28', NULL, 'Activa', 'Tarjeta de débito gratuita'), -- José Pérez - Cuenta de ahorros
(8, 8, 2, 9000.00, 'USD', '2017-06-12', NULL, 'Activa', 'Acceso a descuentos exclusivos en comercios asociados'), -- Sofía Hernández - Cuenta corriente
(9, 9, 1, 6000.00, 'USD', '2020-04-05', NULL, 'Activa', 'Transferencias internacionales sin costo'), -- Daniel Díaz - Cuenta de ahorros
(10, 10, 2, 12000.00, 'USD', '2023-10-19', NULL, 'Activa', 'Asesoría financiera personalizada'), -- Elena Gutiérrez - Cuenta corriente
(11, 11, 1, 15000.00, 'USD', '2016-12-25', NULL, 'Activa', 'Seguro de robo y fraude'), -- Miguel Romero - Cuenta de ahorros
(12, 12, 2, 5000.00, 'USD', '2019-08-08', NULL, 'Activa', 'Acceso a líneas de crédito preferenciales'), -- Paula Alvarez - Cuenta corriente
(13, 13, 1, 2000.00, 'USD', '2018-05-30', NULL, 'Activa', 'Depósito mínimo inicial bajo'), -- Fernando González - Cuenta de ahorros
(14, 14, 2, 11000.00, 'USD', '2020-03-18', NULL, 'Activa', 'Tarjetas adicionales sin costo'), -- Lucía Torres - Cuenta corriente
(15, 15, 1, 18000.00, 'USD', '2019-09-05', NULL, 'Activa', 'Acceso a préstamos con tasas preferenciales'), -- Martín Santos - Cuenta de ahorros
(16, 16, 2, 7000.00, 'USD', '2017-11-22', NULL, 'Activa', 'Sin comisiones por mantenimiento'), -- Eva Ortega - Cuenta corriente
(17, 17, 1, 8000.00, 'USD', '2024-07-14', NULL, 'Activa', 'Depósito mínimo mensual bajo'), -- Javier Ruiz - Cuenta de ahorros
(18, 18, 2, 10000.00, 'USD', '2018-04-03', NULL, 'Activa', 'Acceso a servicios premium de banca en línea'), -- Isabel García - Cuenta corriente
(19, 19, 1, 9500.00, 'USD', '2023-01-27', NULL, 'Activa', 'Transferencias ilimitadas entre cuentas del mismo banco'), -- Diego Moreno - Cuenta de ahorros
(20, 20, 2, 14000.00, 'USD', '2020-08-14', NULL, 'Activa', 'Alertas de actividad sospechosa'), -- Natalia Jiménez - Cuenta corriente
(21, 21, 1, 12000.00, 'USD', '2024-06-19', NULL, 'Activa', 'Servicio de banca en línea'), -- Alejandro Martín - Cuenta de ahorros
(22, 22, 2, 8500.00, 'USD', '2019-02-09', NULL, 'Activa', 'Acceso a préstamos hipotecarios con tasas preferenciales'), -- Carmen Sánchez - Cuenta corriente
(23, 23, 1, 3000.00, 'USD', '2024-10-08', NULL, 'Activa', 'Servicio de alertas por SMS'), -- Gabriel Hernández - Cuenta de ahorros
(24, 24, 2, 9500.00, 'USD', '2018-11-29', NULL, 'Activa', 'Sin costo por retiros en cajeros de otros bancos'), -- Adriana Gómez - Cuenta corriente
(25, 25, 1, 20000.00, 'USD', '2025-05-02', NULL, 'Activa', 'Acceso a cuentas en múltiples divisas'), -- Hugo Rodríguez - Cuenta de ahorros
(26, 26, 2, 6000.00, 'USD', '2025-09-16', NULL, 'Activa', 'Recompensas por uso de la tarjeta de débito'), -- Ana Martínez - Cuenta corriente
(27, 27, 1, 7500.00, 'USD', '2025-12-11', NULL, 'Activa', 'Transferencias internacionales con tarifas reducidas'), -- Santiago Pérez - Cuenta de ahorros
(28, 28, 2, 8500.00, 'USD', '2024-04-24', NULL, 'Activa', 'Sin comisiones por transferencias electrónicas'), -- Valentina López - Cuenta corriente
(29, 29, 1, 4000.00, 'USD', '2022-08-07', NULL, 'Activa', 'Acceso a banca móvil'), -- Pablo Santos - Cuenta de ahorros
(30, 30, 2, 10000.00, 'USD', '2021-03-03', NULL, 'Activa', 'Acceso a asesoría financiera personalizada'); -- Luisa González - Cuenta corriente

```
## insertar tipo de transaccion 
```
sql

INSERT INTO Tipo_transaccion (id, name)
VALUES
(1, 'Depósito'),
(2, 'Retiro'),
(3, 'Transferencia'),
(4, 'Pago');
```

## insertar transacciones 
```
sql 

INSERT INTO Transacciones (id_transaccion, id_persona, id_tipo_transaccion, monto, fecha_transaccion, descripcion)
VALUES
-- Juan García
(1, 1, 1, 500.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(2, 1, 3, 200.00, '2024-04-21 11:45:00', 'Transferencia a María Martínez'),
(3, 1, 4, 100.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- María Martínez
(4, 2, 1, 1000.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(5, 2, 3, 300.00, '2024-04-21 12:00:00', 'Transferencia recibida de Juan García'),
(6, 2, 4, 50.00, '2024-04-22 14:00:00', 'Pago de factura de electricidad'),

-- Pedro López
(7, 3, 1, 700.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(8, 3, 3, 150.00, '2024-04-21 11:45:00', 'Transferencia a Ana Rodríguez'),
(9, 3, 4, 200.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- Ana Rodríguez
(10, 4, 1, 1200.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(11, 4, 3, 500.00, '2024-04-21 12:00:00', 'Transferencia recibida de Pedro López'),
(12, 4, 4, 80.00, '2024-04-22 14:00:00', 'Pago de factura de gas'),

-- Carlos Gómez
(13, 5, 1, 800.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(14, 5, 3, 100.00, '2024-04-21 11:45:00', 'Transferencia a Laura Sánchez'),
(15, 5, 4, 150.00, '2024-04-22 13:15:00', 'Pago de factura de internet'),

-- Laura Sánchez
(16, 6, 1, 1500.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(17, 6, 3, 200.00, '2024-04-21 12:00:00', 'Transferencia recibida de Carlos Gómez'),
(18, 6, 4, 120.00, '2024-04-22 14:00:00', 'Pago de factura de teléfono'),

-- José Pérez
(19, 7, 1, 600.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(20, 7, 3, 300.00, '2024-04-21 11:45:00', 'Transferencia a Sofía Hernández'),
(21, 7, 4, 50.00, '2024-04-22 13:15:00', 'Pago de factura de agua'),

-- Sofía Hernández
(22, 8, 1, 2000.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(23, 8, 3, 400.00, '2024-04-21 12:00:00', 'Transferencia recibida de José Pérez'),
(24, 8, 4, 300.00, '2024-04-22 14:00:00', 'Pago de tarjeta de crédito'),

-- Daniel Díaz
(25, 9, 1, 900.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(26, 9, 3, 200.00, '2024-04-21 11:45:00', 'Transferencia a Elena Gutiérrez'),
(27, 9, 4, 150.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- Elena Gutiérrez
(28, 10, 1, 1800.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(29, 10, 3, 500.00, '2024-04-21 12:00:00', 'Transferencia recibida de Daniel Díaz'),
(30, 10, 4, 100.00, '2024-04-22 14:00:00', 'Pago de factura de luz'),

-- Miguel Romero
(31, 11, 1, 700.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(32, 11, 3, 300.00, '2024-04-21 11:45:00', 'Transferencia a Paula Alvarez'),
(33, 11, 4, 200.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- Paula Alvarez
(34, 12, 1, 1200.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(35, 12, 3, 400.00, '2024-04-21 12:00:00', 'Transferencia recibida de Miguel Romero'),
(36, 12, 4, 100.00, '2024-04-22 14:00:00', 'Pago de factura de teléfono'),

-- Fernando González
(37, 13, 1, 600.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(38, 13, 3, 200.00, '2024-04-21 11:45:00', 'Transferencia a Lucía Torres'),
(39, 13, 4, 150.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- Lucía Torres
(40, 14, 1, 1500.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(41, 14, 3, 400.00, '2024-04-21 12:00:00', 'Transferencia recibida de Fernando González'),
(42, 14, 4, 300.00, '2024-04-22 14:00:00', 'Pago de tarjeta de crédito'),

-- Martín Santos
(43, 15, 1, 800.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(44, 15, 3, 100.00, '2024-04-21 11:45:00', 'Transferencia a Eva Ortega'),
(45, 15, 4, 50.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- Eva Ortega
(46, 16, 1, 1200.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(47, 16, 3, 500.00, '2024-04-21 12:00:00', 'Transferencia recibida de Martín Santos'),
(48, 16, 4, 80.00, '2024-04-22 14:00:00', 'Pago de factura de gas'),

-- Javier Ruiz
(49, 17, 1, 700.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(50, 17, 3, 300.00, '2024-04-21 11:45:00', 'Transferencia a Isabel García'),
(51, 17, 4, 200.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- Isabel García
(52, 18, 1, 1100.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(53, 18, 3, 400.00, '2024-04-21 12:00:00', 'Transferencia recibida de Javier Ruiz'),
(54, 18, 4, 100.00, '2024-04-22 14:00:00', 'Pago de factura de luz'),

-- Diego Moreno
(55, 19, 1, 800.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(56, 19, 3, 200.00, '2024-04-21 11:45:00', 'Transferencia a Natalia Jiménez'),
(57, 19, 4, 150.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- Natalia Jiménez
(58, 20, 1, 1300.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(59, 20, 3, 500.00, '2024-04-21 12:00:00', 'Transferencia recibida de Diego Moreno'),
(60, 20, 4, 80.00, '2024-04-22 14:00:00', 'Pago de factura de internet'),

-- Alejandro Martín
(61, 21, 1, 900.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(62, 21, 3, 300.00, '2024-04-21 11:45:00', 'Transferencia a Carmen Sánchez'),
(63, 21, 4, 200.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- Carmen Sánchez
(64, 22, 1, 1200.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(65, 22, 3, 400.00, '2024-04-21 12:00:00', 'Transferencia recibida de Alejandro Martín'),
(66, 22, 4, 100.00, '2024-04-22 14:00:00', 'Pago de factura de teléfono'),

-- Gabriel Hernández
(67, 23, 1, 700.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(68, 23, 3, 200.00, '2024-04-21 11:45:00', 'Transferencia a Adriana Gómez'),
(69, 23, 4, 150.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- Adriana Gómez
(70, 24, 1, 1400.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(71, 24, 3, 500.00, '2024-04-21 12:00:00', 'Transferencia recibida de Gabriel Hernández'),
(72, 24, 4, 80.00, '2024-04-22 14:00:00', 'Pago de factura de gas'),

-- Santiago Pérez
(73, 25, 1, 600.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(74, 25, 3, 300.00, '2024-04-21 11:45:00', 'Transferencia a Valentina López'),
(75, 25, 4, 200.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- Valentina López
(76, 26, 1, 1000.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(77, 26, 3, 400.00, '2024-04-21 12:00:00', 'Transferencia recibida de Santiago Pérez'),
(78, 26, 4, 100.00, '2024-04-22 14:00:00', 'Pago de factura de luz'),

-- Pablo Santos
(79, 27, 1, 800.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(80, 27, 3, 200.00, '2024-04-21 11:45:00', 'Transferencia a Luisa González'),
(81, 27, 4, 150.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- Luisa González
(82, 28, 1, 1200.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(83, 28, 3, 500.00, '2024-04-21 12:00:00', 'Transferencia recibida de Pablo Santos'),
(84, 28, 4, 80.00, '2024-04-22 14:00:00', 'Pago de factura de gas'),
-- Juan García
(85, 29, 1, 700.00, '2024-04-20 09:30:00', 'Depósito en efectivo'),
(86, 29, 3, 200.00, '2024-04-21 11:45:00', 'Transferencia a Martín Santos'),
(87, 29, 4, 100.00, '2024-04-22 13:15:00', 'Pago de servicios'),

-- María Martínez
(88, 30, 1, 1100.00, '2024-04-20 10:00:00', 'Depósito en cheque'),
(89, 30, 3, 400.00, '2024-04-21 12:00:00', 'Transferencia recibida de Juan García'),
(90, 30, 4, 50.00, '2024-04-22 14:00:00', 'Pago de factura de agua');

```

## insertar historial
```
sql

INSERT INTO Historial_Atencion_Cliente (id_atencion, id_cliente, id_empleado, fecha_atencion, tipo_atencion, descripcion)
VALUES
-- Atenciones para Juan García (cliente)
(34, 1, 3, '2024-05-01 09:30:00', 'tarjeta', 'Solicitud de aumento de límite de crédito'),
(35, 1, 4, '2024-05-01 11:45:00', 'transacción', 'Consulta de saldo'),
(36, 1, 6, '2024-05-01 14:00:00', 'cuenta', 'Apertura de cuenta de ahorros'),

-- Atenciones para María Martínez (cliente)
(37, 2, 7, '2024-05-02 10:00:00', 'tarjeta', 'Activación de tarjeta de débito'),
(38, 2, 9, '2024-05-02 12:15:00', 'crédito', 'Solicitud de préstamo personal'),
(39, 2, 11, '2024-05-02 14:45:00', 'transacción', 'Transferencia bancaria'),

-- Atenciones para Pedro López (cliente)
(40, 5, 13, '2024-05-03 09:30:00', 'cuenta', 'Cierre de cuenta corriente'),
(41, 5, 15, '2024-05-03 11:45:00', 'tarjeta', 'Reemplazo de tarjeta de crédito'),
(42, 5, 17, '2024-05-03 14:45:00', 'transacción', 'Reclamación por retiro no reconocido');

-- Atenciones para Ana Rodríguez (cliente)
(43, 8, 19, '2024-05-04 09:30:00', 'tarjeta', 'Reporte de tarjeta extraviada'),
(44, 8, 21, '2024-05-04 11:45:00', 'transacción', 'Depósito en efectivo'),
(45, 8, 23, '2024-05-04 14:00:00', 'crédito', 'Consulta de estado de préstamo'),

-- Atenciones para Carlos Gómez (cliente)
(46, 10, 25, '2024-05-05 09:30:00', 'transacción', 'Transferencia a cuenta externa'),
(47, 10, 27, '2024-05-05 11:45:00', 'cuenta', 'Actualización de información personal'),
(48, 10, 29, '2024-05-05 14:45:00', 'tarjeta', 'Revisión de historial de transacciones'),

-- Atenciones para Laura Sánchez (cliente)
(49, 12, 3, '2024-05-06 09:30:00', 'cuenta', 'Apertura de cuenta de inversión'),
(50, 12, 4, '2024-05-06 11:45:00', 'tarjeta', 'Activación de tarjeta de débito'),
(51, 12, 6, '2024-05-06 14:00:00', 'transacción', 'Consulta de saldo');

-- Atenciones para José Pérez (cliente)
(52, 14, 7, '2024-05-07 09:30:00', 'transacción', 'Reclamación por error en transferencia'),
(53, 14, 9, '2024-05-07 11:45:00', 'cuenta', 'Solicitud de cierre de cuenta de ahorros'),
(54, 14, 11, '2024-05-07 14:45:00', 'tarjeta', 'Reporte de tarjeta dañada');

-- Atenciones para Sofía Hernández (cliente)
(55, 16, 13, '2024-05-08 09:30:00', 'cuenta', 'Consulta de saldo'),
(56, 16, 15, '2024-05-08 11:45:00', 'tarjeta', 'Solicitud de nueva tarjeta de crédito'),
(57, 16, 17, '2024-05-08 14:00:00', 'crédito', 'Consulta de opciones de refinanciamiento'),

-- Atenciones para Daniel Díaz (cliente)
(58, 18, 19, '2024-05-09 09:30:00', 'transacción', 'Asistencia para configuración de transferencias automáticas'),
(59, 18, 21, '2024-05-09 11:45:00', 'cuenta', 'Apertura de cuenta de jubilación'),
(60, 18, 23, '2024-05-09 14:45:00', 'tarjeta', 'Activación de tarjeta de crédito'),

-- Atenciones para Elena Gutiérrez (cliente)
(61, 20, 25, '2024-05-10 09:30:00', 'tarjeta', 'Reporte de fraude en tarjeta de débito'),
(62, 20, 27, '2024-05-10 11:45:00', 'transacción', 'Transferencia internacional de fondos'),
(63, 20, 29, '2024-05-10 14:00:00', 'cuenta', 'Consulta de movimientos de cuenta'),

-- Atenciones para Miguel Romero (cliente)
(64, 22, 3, '2024-05-11 09:30:00', 'cuenta', 'Solicitud de cierre de cuenta corriente'),
(65, 22, 4, '2024-05-11 11:45:00', 'tarjeta', 'Bloqueo temporal de tarjeta de débito'),
(66, 22, 6, '2024-05-11 14:45:00', 'transacción', 'Consulta de saldo');

-- Atenciones para Paula Álvarez (cliente)
(67, 24, 7, '2024-05-12 09:30:00', 'cuenta', 'Consulta de saldo'),
(68, 24, 9, '2024-05-12 11:45:00', 'tarjeta', 'Solicitud de nueva tarjeta de crédito'),
(69, 24, 11, '2024-05-12 14:00:00', 'crédito', 'Consulta de opciones de refinanciamiento'),

-- Atenciones para Fernando González (cliente)
(70, 26, 13, '2024-05-13 09:30:00', 'transacción', 'Asistencia para configuración de transferencias automáticas'),
(71, 26, 15, '2024-05-13 11:45:00', 'cuenta', 'Apertura de cuenta de jubilación'),
(72, 26, 17, '2024-05-13 14:45:00', 'tarjeta', 'Activación de tarjeta de crédito'),

-- Atenciones para Lucía Torres (cliente)
(73, 28, 19, '2024-05-14 09:30:00', 'tarjeta', 'Reporte de fraude en tarjeta de débito'),
(74, 28, 21, '2024-05-14 11:45:00', 'transacción', 'Transferencia internacional de fondos'),
(75, 28, 23, '2024-05-14 14:00:00', 'cuenta', 'Consulta de movimientos de cuenta'),

-- Atenciones para Martín Santos (cliente)
(76, 30, 25, '2024-05-15 09:30:00', 'cuenta', 'Solicitud de cierre de cuenta corriente'),
(77, 30, 27, '2024-05-15 11:45:00', 'tarjeta', 'Bloqueo temporal de tarjeta de débito'),
(78, 30, 29, '2024-05-15 14:45:00', 'transacción', 'Consulta de saldo');

```