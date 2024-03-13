<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Cliente;

class ClienteTest extends TestCase
{
    use RefreshDatabase;

    public function testCrearCliente()
    {
        // Datos de ejemplo para el cliente
        $datosCliente = [
            'nombre' => 'Juan',
            'apellido' => 'Pérez',
            'email' => 'juan@example.com',
        ];

        // Envía una solicitud POST para almacenar el cliente
        $this->post('/clientes', $datosCliente);

        // Verifica que el cliente esté almacenado en la base de datos
        $this->assertDatabaseHas('clientes', $datosCliente);
    }
}
