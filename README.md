# TodoList

Este proyecto usa [Angular CLI](https://github.com/angular/angular-cli) version 19.0.1.

## Servidor de desarrollo

Tpara iniciar el servidor local, run:

```bash
ng serve
```

Una vez el servidor esta corriendo, abrir el navegador en: `http://localhost:4200/`.

## Descripcion del proyecto

este proyecto es una aplicacion "Todo" orientada a componentes `standalone` esto significa que ya no se usan los modulos o al menos en las nuevas versiones (17) se incluye y una breve documentación:
[standalone-components](https://v17.angular.io/guide/standalone-components)

## otras caracteristicas

- se incluyo **PM2**, para el continuo funcionamiento de la app
- Tambien contiene su **dockerfile** y su archivo **Yaml** con **GNIX** para el deploy continuo
- Se utilizo la libreria de **Jest** para pruebas unitarias
- En local se configuro su respectivo **Eslinter** y **Prittier**
