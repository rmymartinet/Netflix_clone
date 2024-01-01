// Import du client Prisma depuis le package '@prisma/client'
//Sert à communiquer avec la base de données
import { PrismaClient } from '@prisma/client';

// Création d'une instance du client Prisma et stockage dans la variable 'client'
// Cette variable est ensuite exportée pour être utilisée dans d'autres fichiers vérifiant l'existence d'une instance du client
const client = global.prismadb || new PrismaClient();

// Si l'environnement d'exécution est en mode 'production', stocke l'instance du client dans une variable globale
// Cela est généralement fait pour profiter du mécanisme de pooling de connexion dans les environnements de production.
// Cette ligne de code sert à éviter de créer une nouvelle instance du client à chaque requête

if (process.env.NODE_ENV === 'production') global.prismadb = client;

// Exporte l'instance du client Prisma
export default client;
