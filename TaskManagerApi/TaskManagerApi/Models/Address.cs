namespace TaskManagerApi.Models
{
    public class Address
    {
        public int Id { get; set; }

        public string addressline1 {  get; set; }

        public string addressline2 { get; set; }

        public string city { get; set; }

        public int? UserId { get; set; }

        public User? User { get; set; }

    }
}
