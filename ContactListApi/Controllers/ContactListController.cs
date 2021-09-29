using ContactListApi.Models;
using ContactListApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactListApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactListController : ControllerBase
    {
        public ContactListService _serv;
        public ContactListController(ContactListService serv)
        {
            _serv = serv;
        }

        [HttpGet("GetContactList")]
        public IActionResult GetContactList() => Ok(_serv.GetContactList());

        [HttpPost("AddNewContact")]
        public IActionResult AddNewContact([FromBody] ContactItem newcontact)
        {
            var createdContact = _serv.AddNewContact(newcontact);
            return Created(nameof(AddNewContact), createdContact);
        }

        [HttpDelete("RemoveContact")]
        public IActionResult RemoveContact([FromBody] string id)
        {
            if (id is not null)
            {
                bool isDeleted = _serv.RemoveContact(id);
                if (isDeleted)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }
        [HttpPut("UpdateContact")]
        public IActionResult UpdateContact([FromBody] ContactItem contactItem)
        {

            if (contactItem.Id != Guid.Empty)
            {
                if (contactItem is not null)
                {
                    object status = _serv.UpdateContact(contactItem.Id.ToString(), contactItem);
                    return Ok(status);
                }
            }
            return BadRequest();
        }

        [HttpPut("UpdateContactStatus")]
        public IActionResult UpdateContactStatus([FromBody] ChangeStatusVM obj)
        {
            if (obj.Id is not null)
            {
                if (obj.Status is not null)
                {
                    object statusCode = _serv.UpdateContactStatus(obj.Id, obj.Status);
                    return Ok(statusCode);
                }
            }
            return BadRequest();
        }
    }
}