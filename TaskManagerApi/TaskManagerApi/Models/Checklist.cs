using System.ComponentModel.DataAnnotations;

namespace TaskManagerApi.Models
{
    public class Checklist
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public bool IsDone { get; set; }
        public int TaskId { get; set; }

        public TaskItem? Task { get; set; }
    }
}
