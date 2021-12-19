using Microsoft.EntityFrameworkCore.Migrations;

namespace E_Commerce.Migrations
{
    public partial class OrderUpdateallson : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "productId",
                table: "ProductList",
                newName: "productID");

            migrationBuilder.RenameColumn(
                name: "productPrice",
                table: "ProductList",
                newName: "price");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "productID",
                table: "ProductList",
                newName: "productId");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "ProductList",
                newName: "productPrice");
        }
    }
}
