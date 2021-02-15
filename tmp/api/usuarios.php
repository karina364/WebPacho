<?php
    header("Content-Type: application/json");
    include_once("../class/class-usuario.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST METHOD']){
        case 'POST':
            //$_POST = json_decode(file_get_contents('php.//input'), true);
            //$usuario = new Usuario($_POST['nombre'], $_POST['apellido']); // Esta parte debe de ser editada
            //$usuario->guardarUsuario();
            //$resultado["mensaje"] = "guardar usuario"; //este se supone que es un array??
            // echo json_encode($resultado)
            break;
        
        case 'GET':
            if (isset($_GET['id'])){
                Usuario::obtenerUsuarios($_GET['id']);
            }else{
                Usuario::obtenerUsuarios();
            }
            break;
        
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $usuario = new Usuario($_PUT['nombre'], $_PUT['apellido']); // Esta parte debe estar editada y debe coincidir con el codigo de arriba
            $usuario-> actualizarUsuario($_GET['id']);
            $resultado["mensaje"] = "Actualizar un usuario con el id" // Editar esta parte
            echo json_encode($resultado);
            break;

        case 'DELETE':
            Usuario::eliminarUsuario($_GET['id']);
            $resultado["mensaje"] = "Eliminar usuario con el id:"
            echo json_encode($resultado);
            break;
    }