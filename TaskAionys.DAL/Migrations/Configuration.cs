namespace TaskAionys.DAL.Migrations
{
    using System.Data.Entity.Migrations;
    using TaskAionys.DAL.Models;
    using System;

    internal sealed class Configuration : DbMigrationsConfiguration<TaskAionys.DAL.Models.AionysContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(TaskAionys.DAL.Models.AionysContext context)
        {
            var cities = new City[]
            {
                new City { Name = "Kiev" },
                new City { Name = "Moscov" },
                new City { Name = "Washington" },
                new City { Name = "London" },
                new City { Name = "Canberra" }
            };

            context.Cities.AddRange(cities);
            context.SaveChanges();

            var clients = new Client[]
            {
                new Client { FirstName = "John", LastName = "Smith", Address = "St. Vincent 22", PhoneNumbersCSV = "+777777777777", CityId = cities[2].Id },
                new Client { FirstName = "Anton", LastName = "Pahomov", Address = "Pushkinskaya 28", PhoneNumbersCSV = "+888888888888", CityId = cities[1].Id },
                new Client { FirstName = "Sergei", LastName = "Sidorov", Address = "Sidorova 22", PhoneNumbersCSV = "+999999999999", CityId = cities[0].Id },
                new Client { FirstName = "Andrew", LastName = "Sidorenko", Address = "Sidorenko 98", PhoneNumbersCSV = "+999999999999", CityId = cities[0].Id },
                new Client { FirstName = "Tom", LastName = "Tompson", Address = "St. Vincent 33", PhoneNumbersCSV = "+555555555555", CityId = cities[3].Id },
                new Client { FirstName = "Eugene", LastName = "Simpson", Address = "St. Simpson 33", PhoneNumbersCSV = "+666666666666", CityId = cities[4].Id }
            };
            context.Clients.AddRange(clients);
            context.SaveChanges();

            context.Tasks.AddOrUpdate(
                new Task {
                    ClientId = clients[0].Id,
                    Name = "Update project 1",
                    Description = "Description of project 1",
                    StartTime = DateTime.UtcNow,
                    EndTime = DateTime.UtcNow.AddDays(2)
                },
                new Task {
                    ClientId = clients[0].Id,
                    Name = "Update project 12",
                    Description = "Description of project 12",
                    StartTime = DateTime.UtcNow,
                    EndTime = DateTime.UtcNow.AddDays(2)
                },
                new Task {
                    ClientId = clients[1].Id,
                    Name = "Update project 2",
                    Description = "Description of project 2",
                    StartTime = DateTime.UtcNow,
                    EndTime = DateTime.UtcNow.AddDays(2)
                },
                new Task {
                    ClientId = clients[1].Id,
                    Name = "Update project 21",
                    Description = "Description of project 21",
                    StartTime = DateTime.UtcNow,
                    EndTime = DateTime.UtcNow.AddDays(2)
                },
                new Task {
                    ClientId = clients[2].Id,
                    Name = "Update project 3",
                    Description = "Description of project 3",
                    StartTime = DateTime.UtcNow,
                    EndTime = DateTime.UtcNow.AddDays(2)
                },
                new Task {
                    ClientId = clients[3].Id,
                    Name = "Update project 4",
                    Description = "Description of project 4",
                    StartTime = DateTime.UtcNow,
                    EndTime = DateTime.UtcNow.AddDays(2)
                },
                new Task {
                    ClientId = clients[4].Id,
                    Name = "Update project 5",
                    Description = "Description of project 5",
                    StartTime = DateTime.UtcNow,
                    EndTime = DateTime.UtcNow.AddDays(2)
                }
            );

            base.Seed(context);
        }
    }
}
