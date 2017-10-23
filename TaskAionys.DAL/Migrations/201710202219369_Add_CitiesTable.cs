namespace TaskAionys.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Add_CitiesTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Clients", "CityId", c => c.Int(nullable: false));
            CreateIndex("dbo.Clients", "CityId");
            AddForeignKey("dbo.Clients", "CityId", "dbo.Cities", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Clients", "CityId", "dbo.Cities");
            DropIndex("dbo.Clients", new[] { "CityId" });
            DropColumn("dbo.Clients", "CityId");
            DropTable("dbo.Cities");
        }
    }
}
