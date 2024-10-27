using System.ComponentModel.DataAnnotations;

namespace TaskManagerApi.Models
{
    public class TaskItem
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public string Priority {  get; set; }
        public User? Assignee { get; set; }

        public int? AssigneeId { get; set; }


        public ICollection<Checklist>? Checklists { get; set; }
    }
}
