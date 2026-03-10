# Restaurant Inventory & Sales Controller

A relational database system designed to synchronize sales data with real-time ingredient stock management.

## Database Schema

### Entities
1. [cite_start]**Pratos**: Stores the name of the menu items[cite: 10, 12].
2. [cite_start]**Ingredientes**: Manages stock levels, measurement units (e.g., kg, liters), and alerts for minimum stock[cite: 13, 15, 16, 19].
3. [cite_start]**Receitas**: A many-to-many relationship mapping dishes to their required ingredients and specific quantities[cite: 5, 7, 8, 9].
4. [cite_start]**Vendas**: Logs sales events to trigger inventory updates[cite: 1, 4].

## Key Features
- [cite_start]**Stock Tracking**: Monitor `quantidade_estoque` vs `quantidade_min` to prevent shortages[cite: 18, 19].
- [cite_start]**Relational Mapping**: Seamlessly link sales to ingredients via the `prato_id` foreign key[cite: 3, 7].
- [cite_start]**Data Integrity**: Uses `SERIAL` primary keys and structured data types (VARCHAR, NUMERIC) for precision[cite: 2, 9, 12, 17].
