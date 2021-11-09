CREATE DATABASE  IF NOT EXISTS `kata_sql_restaurant` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `kata_sql_restaurant`;
-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: kata_sql_restaurant
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

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
-- Table structure for table `dish`
--

DROP TABLE IF EXISTS `dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dish` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dish`
--

LOCK TABLES `dish` WRITE;
/*!40000 ALTER TABLE `dish` DISABLE KEYS */;
INSERT INTO `dish` VALUES (1,'Tartiflette',12),(2,'Coq au Vin',14),(3,'Pot au feu',13.5),(4,'Quiche lorraine',9),(5,'Crêpe',4.5),(6,'Steak tartare',8),(7,'Cassoulet',16),(8,'Huîtres',22),(9,'Gratin dauphinois',10),(10,'Bœuf bourguignon',15),(11,'Biscôme',5.9),(12,'Brioche',6),(13,'Pain perdu',4),(14,'Panettone',4.5),(15,'Tarte à la rhubarbe',5),(16,'Macarons',3.5),(17,'Flan pâtissier',5),(18,'Forêt noire',8),(19,'Tarte Tatin',6),(20,'Merveilleux',5.5);
/*!40000 ALTER TABLE `dish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_restaurant_FK` (`restaurant_id`),
  CONSTRAINT `menu_restaurant_FK` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'Le menu cher',1),(2,'Le menu très cher',1),(3,'Le menu trop cher',1),(4,'Le menu unique',2),(5,'Pastèque et camembert',3),(6,'Picouli',3),(7,'Menu midi',4),(8,'Menu soir',4),(9,'Brunch de ouf',5),(10,'Les petits plats',6),(11,'Menu enfant',6),(12,'Menu A',7),(13,'Menu B',7),(14,'Menu C',7),(15,'Menu S+',7),(16,'Mangeons bien',8),(17,'Mangeons équilibré',8),(18,'Mangeons peu',8),(19,'Mangeons beaucoup',8),(20,'Faim de table',10);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_dish`
--

DROP TABLE IF EXISTS `menu_dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu_dish` (
  `dish_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  PRIMARY KEY (`dish_id`,`menu_id`),
  KEY `menu_dish_menu0_FK` (`menu_id`),
  CONSTRAINT `menu_dish_dish_FK` FOREIGN KEY (`dish_id`) REFERENCES `dish` (`id`),
  CONSTRAINT `menu_dish_menu0_FK` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_dish`
--

LOCK TABLES `menu_dish` WRITE;
/*!40000 ALTER TABLE `menu_dish` DISABLE KEYS */;
INSERT INTO `menu_dish` VALUES (1,1),(10,1),(2,2),(2,3),(6,3),(12,3),(7,4),(18,4),(1,5),(4,5),(7,5),(16,5),(3,6),(8,7),(16,7),(19,8),(20,8),(7,9),(9,10),(15,10),(3,12),(7,12),(8,13),(14,13),(7,15),(18,15),(2,16),(3,16),(4,16),(11,16),(12,16),(1,17),(4,18),(15,18),(6,19),(8,19),(8,20),(9,20),(10,20),(11,20);
/*!40000 ALTER TABLE `menu_dish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `city` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'Guy Savoy','Paris'),(2,'Alain Ducasse','Paris'),(3,'La Vague d’Or','Saint Tropez'),(4,'L’Ambroisie','Paris'),(5,'L’Auberge du Vieux Puits','Fonjoncouse'),(6,'L’Assiette Champenoise','Tinqueux'),(7,'L’Arpège','Paris'),(8,'Pavillon Ledoyen','Paris'),(9,'Le Pré Catelan','Paris'),(10,'La Maison Troisgros','Ouches');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-20 11:25:46

