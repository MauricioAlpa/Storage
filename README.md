# 🥗 Storage & Sales Controller

A robust PostgreSQL-based system for real-time inventory tracking in a culinary environment.

## 🚀 Quick Features
- **Automated Stock Logic**: Connects sales directly to raw material consumption.
- **Safety Thresholds**: Set minimum stock levels to trigger restock alerts.
- **Recipe Mapping**: Flexible many-to-many relationship between dishes and ingredients.

## 📐 Data Structure

| Table | Primary Key | Key Attributes |
| :--- | :--- | :--- |
| **Pratos** | `id` | `nome` |
| **Ingredientes** | `id` | `nome`, `unidade`, `quantidade_estoque`, `quantidade_min` |
| **Receitas** | `id` | `prato_id`, `ingrediente_id`, `quantidade` |
| **Vendas** | `id` | `prato_id`, `quantidade` |

## 🛠️ Setup
1. Run the provided SQL script in your PostgreSQL environment.
2. Populate `Pratos` and `Ingredientes`.
3. Define the proportions in `Receitas`.
4. Log sales in `Vendas` to track your business flow.
