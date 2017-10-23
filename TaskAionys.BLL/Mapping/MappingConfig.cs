using AutoMapper;
using TaskAionys.DAL.Models;
using TaskAionys.ViewModels;

namespace TaskAionys.BLL.Mapping
{
    public static class MappingConfig
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Client, ClientViewModel>()
                    .ForMember(dest => dest.PhoneNumbers, opt => opt.MapFrom(src => src.PhoneNumbersCSV.Split(',')));
                cfg.CreateMap<Task, TaskViewModel>();
                cfg.CreateMap<City, CityViewModel>();
                cfg.CreateMap<ClientViewModel, Client>();
                cfg.CreateMap<TaskViewModel, Task>();
                cfg.CreateMap<CityViewModel, City>();
            });
        }
    }
}
