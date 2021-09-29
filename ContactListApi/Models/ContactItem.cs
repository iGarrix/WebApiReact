﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContactListApi.Models
{
    public class ContactItem
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public string Image { get; set; }
        public string Status { get; set; }
    }
}
