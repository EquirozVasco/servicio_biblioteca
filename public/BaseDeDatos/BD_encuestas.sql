-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: encuestas
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `espacio`
--

DROP TABLE IF EXISTS `espacio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `espacio` (
  `idEspacio` int(11) NOT NULL AUTO_INCREMENT,
  `iluminacion` int(11) NOT NULL,
  `temperatura` int(11) NOT NULL,
  `ruido` int(11) NOT NULL,
  `limpieza` int(11) NOT NULL,
  `estadoFuncionamiento` int(11) NOT NULL,
  `instructivosOperacion` int(11) NOT NULL,
  `señalizacion` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `comentarios` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idEspacio`),
  KEY `tipoCliente_espacio_idx` (`idCliente`),
  CONSTRAINT `idCliente` FOREIGN KEY (`idCliente`) REFERENCES `tipo_cliente` (`idCliente`),
  CONSTRAINT `tipoCliente_espacio` FOREIGN KEY (`idCliente`) REFERENCES `tipo_cliente` (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `espacio`
--

LOCK TABLES `espacio` WRITE;
/*!40000 ALTER TABLE `espacio` DISABLE KEYS */;
INSERT INTO `espacio` VALUES (1,5,5,5,5,5,5,5,4,NULL),(2,4,4,5,4,5,4,5,3,NULL);
/*!40000 ALTER TABLE `espacio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestamo`
--

DROP TABLE IF EXISTS `prestamo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prestamo` (
  `idPrestamo` int(11) NOT NULL AUTO_INCREMENT,
  `atencionPersonal` int(11) NOT NULL,
  `procedimientoPrestamo` int(11) NOT NULL,
  `disponibilidad` int(11) NOT NULL,
  `estadoLibros` int(11) NOT NULL,
  `actualidadRecursos` int(11) NOT NULL,
  `dotacion` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `comentarios` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idPrestamo`),
  KEY `tipoCliente_prestamo_idx` (`idCliente`),
  CONSTRAINT `tipoCliente_prestamo` FOREIGN KEY (`idCliente`) REFERENCES `tipo_cliente` (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestamo`
--

LOCK TABLES `prestamo` WRITE;
/*!40000 ALTER TABLE `prestamo` DISABLE KEYS */;
INSERT INTO `prestamo` VALUES (1,3,3,3,3,3,3,1,NULL),(2,3,3,3,3,3,3,1,NULL),(3,5,3,4,5,4,5,2,NULL),(4,5,5,5,5,4,4,1,NULL);
/*!40000 ALTER TABLE `prestamo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `renovacion`
--

DROP TABLE IF EXISTS `renovacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `renovacion` (
  `idRenovaciones` int(11) NOT NULL AUTO_INCREMENT,
  `atencionPersonal` int(11) NOT NULL,
  `procedimientoRenovacion` int(11) NOT NULL,
  `horariosAtencion` int(11) NOT NULL,
  `idClienteF` int(11) NOT NULL,
  `comentarios` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idRenovaciones`,`idClienteF`),
  KEY `id_tipo_cliente_idx` (`idClienteF`),
  CONSTRAINT `tipoCliente_renovacion` FOREIGN KEY (`idClienteF`) REFERENCES `tipo_cliente` (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `renovacion`
--

LOCK TABLES `renovacion` WRITE;
/*!40000 ALTER TABLE `renovacion` DISABLE KEYS */;
INSERT INTO `renovacion` VALUES (2,3,3,3,5,NULL);
/*!40000 ALTER TABLE `renovacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva_cubiculos`
--

DROP TABLE IF EXISTS `reserva_cubiculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reserva_cubiculos` (
  `idReserva_cubiculos` int(11) NOT NULL AUTO_INCREMENT,
  `atencionPersonal` int(11) NOT NULL,
  `procedimientoReserva` int(11) NOT NULL,
  `idClienteF` int(11) NOT NULL,
  `comentarios` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idReserva_cubiculos`),
  KEY `idClienteF_idx` (`idClienteF`),
  CONSTRAINT `tipoCliente_reservaCubiculos` FOREIGN KEY (`idClienteF`) REFERENCES `tipo_cliente` (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva_cubiculos`
--

LOCK TABLES `reserva_cubiculos` WRITE;
/*!40000 ALTER TABLE `reserva_cubiculos` DISABLE KEYS */;
INSERT INTO `reserva_cubiculos` VALUES (1,5,5,1,NULL),(2,2,2,2,'...');
/*!40000 ALTER TABLE `reserva_cubiculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_cliente`
--

DROP TABLE IF EXISTS `tipo_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_cliente` (
  `idCliente` int(11) NOT NULL AUTO_INCREMENT,
  `tipoCliente` varchar(20) NOT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_cliente`
--

LOCK TABLES `tipo_cliente` WRITE;
/*!40000 ALTER TABLE `tipo_cliente` DISABLE KEYS */;
INSERT INTO `tipo_cliente` VALUES (1,'estudiante'),(2,'docente'),(3,'investigador'),(4,'empleado'),(5,'externo');
/*!40000 ALTER TABLE `tipo_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'encuestas'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-25 20:30:46
