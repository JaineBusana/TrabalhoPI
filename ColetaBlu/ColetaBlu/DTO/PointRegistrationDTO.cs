﻿namespace ColetaBlu.DTO
{
    public class PointRegistrationDTO
    {
        public int? Id { get; set; } 
        public string? Name { get; set; }
        public string? Street { get; set; }
        public int? Number { get; set; }
        public int? Neighborhood_Id { get; set; }
        public int? User_id { get; set; }
    }
}