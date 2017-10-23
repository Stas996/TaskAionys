namespace TaskAionys.ViewModels
{
    public class ClientViewModel
    {
        public int Id { get; set; }
        public int CityId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName {
            get
            {
                return $"{LastName} {FirstName}";
            }
        }
        public string Address { get; set; }
        public string PhoneNumbersCSV { get; set; }
        public string[] PhoneNumbers { get; set; }
    }
}
