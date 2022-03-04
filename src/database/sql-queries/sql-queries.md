# SQL Queries

![Database diagram](./restaurant-uml.png)

Import the [restaurant.sql](./restaurant.sql) file into MySQL.

Create the following queries :

1. Select all restaurant's name

2. Select all menu's title alphabetically

3. Select each dish's name and price, in decreasing price order

4. Select restaurant's name located in the city of Paris

5. Select all menu's title which contains the word "menu"

6. Select cities without duplicates

7. Select the name of the most expensive dish

8. Select all menu's title and the restaurant's name where they are sold

9. Select all dish's name (without duplicate) which are contained by at least one menu

10. Select all dish's name and price with corresponding menu's title

11. Select each dish's name and price, corresponding menu's title and restaurant's name who sells it

12. Select all the restaurants' name which don't sell any menu

13. Select all dish's name not contained in any menu

14. Select each city's name and how many restaurants located in this city

15. Select menu's title and dishes' count for each menu

16. Select the title of the menu with the most dishes

17. Select, for each restaurant, its name and how many menus it sells (some restaurants might not have any menu)

18. Select all menu's title and dishes count, where menus have more than two dishes.

19. Select all restaurant's name which sells at least one menu where dishes' price combined is 30 or more

## Hints :

<details>
    <summary>Request 1</summary>

    SELECT, FROM

</details>
<details>
    <summary>Request 2</summary>

    ORDER BY

</details>
<details>
    <summary>Request 3</summary>

    ORDER BY

</details>
<details>
    <summary>Request 4</summary>

    WHERE

</details>
<details>
    <summary>Request 5</summary>

    LIKE

</details>
<details>
    <summary>Request 6</summary>

    DISTINCT

</details>
<details>
    <summary>Request 7</summary>

    ORDER BY, LIMIT

</details>
<details>
    <summary>Request 8</summary>

    INNER JOIN

</details>
<details>
    <summary>Request 9</summary>

    DISTINCT, INNER JOIN

</details>
<details>
    <summary>Request 10</summary>

    INNER JOIN (x2)

</details>
<details>
    <summary>Request 11</summary>

    INNER JOIN (x3)

</details>
<details>
    <summary>Request 12</summary>

    LEFT JOIN

</details>
<details>
    <summary>Request 13</summary>

    LEFT JOIN

</details>
<details>
    <summary>Request 14</summary>

    COUNT, GROUP BY

</details>
<details>
    <summary>Request 15</summary>

    COUNT, INNER JOIN (x2), GROUP BY

</details>
<details>
    <summary>Request 16</summary>

    CCOUNT, INNER JOIN (x2), GROUP BY, ORDER BY, LIMIT

</details>
<details>
    <summary>Request 17</summary>

    COUNT, LEFT JOIN, GROUP BY

</details>
<details>
    <summary>Request 18</summary>

    COUNT, INNER JOIN, GROUP BY, HAVING

</details>
<details>
    <summary>Request 19</summary>

    DISTINCT, INNER JOIN (x3), GROUP BY, HAVING

</details>
