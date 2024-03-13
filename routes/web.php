<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClienteController;

// Rutas para las acciones del controlador ClienteController
Route::get('/api/clientes', [ClienteController::class, 'index'])->name('clientes.index');
Route::post('/api/clientes', [ClienteController::class, 'store'])->name('clientes.store');
Route::get('/api/clientes/{id}', [ClienteController::class, 'show'])->name('clientes.show');
Route::put('/api/clientes/{id}', [ClienteController::class, 'update'])->name('clientes.update');
Route::delete('/api/clientes/{id}', [ClienteController::class, 'destroy'])->name('clientes.destroy');
