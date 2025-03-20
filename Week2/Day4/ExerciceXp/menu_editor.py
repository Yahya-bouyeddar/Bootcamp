import psycopg2
from menu_manager import MenuManager
from menu_item import MenuItem
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '12345678'
DATABASE = 'Restaurant'
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )

def show_user_menu():
    print('---------->Afficher un article (V)')
    print('---------->Ajouter un élément (A)')
    print('---------->Supprimer un élément (D)')
    print('---------->Mettre à jour un élément (U)')
    print('---------->Afficher le menu (S)')
    choix = input('donner moi votre choix ')
    
    
    if choix == 'V' :
        mot = input('donne moi le item_name que tu veux afficher ')

        print(MenuManager().get_by_name(mot,connection)) 
        
    elif choix == 'A' :
        item_name = input('ajouter le nom de nv article')
        item_price = int(input('donner moi le prix de l article'))
        item = MenuItem(item_name,item_price)
        item.save(connection)
        
    elif choix == 'D' :
      try:
            choix_delet = input('Donne-moi l\'article que tu veux supprimer: ')
            
            item = MenuManager().get_by_name(choix_delet, connection)
            if item:
                item_to_delete = MenuItem(choix_delet, 0)  
                item_to_delete.delete(connection)
                print(f"L'élément '{choix_delet}' a été supprimé avec succès.")
            else:
                print(f"Aucun élément trouvé avec le nom '{choix_delet}', la suppression n'a pas été effectuée.")
      except Exception as e:
            print(f"Une erreur s'est produite lors de la suppression de '{choix_delet}': {e}")

        
    
    elif choix == 'U':
        try:
            choix_up = input('donne moi larticle que tu veux modifier')
            
            item = MenuManager().get_by_name(choix_up,connection)
            if item:
                priceUp = int(input('donne moi le nv prix'))
                nameUp = input('donner moi le nv prix')
                item_to_update = MenuItem({choix_up}).update(priceUp,nameUp,connection)
            else:
                print(f"Aucun élément trouvé avec le nom '{choix_up}', update n'a pas été effectuée.")
        except Exception as e:
            print(f"Une erreur s'est produite lors de la modification '{choix_up}': {e}")

    elif choix == 'S':
        print(MenuManager.all_items(connection))
    elif choix == 'X':
        print('vous avez choisis de quitter au revoir')

    else:
        print('choix invalide')




 
        


        
    


show_user_menu()
