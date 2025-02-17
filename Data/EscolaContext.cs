using EscolaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EscolaAPI.Data;

public class EscolaContext : DbContext
{
    public EscolaContext(DbContextOptions<EscolaContext> options) : base(options) { }

    public DbSet<Aluno> Alunos { get; set; }
}
