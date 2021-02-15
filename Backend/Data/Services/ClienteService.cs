using System.Collections.Generic;
using System.Threading.Tasks;
using Uaaloo.Data.Models;
using Nancy.Json.Converters;
using System.Linq;

namespace Uaaloo.Data.Services
{
    public interface IClienteService
    {
        void agregar(Cliente cliente);
        void eliminar(int id);
        Cliente editar(int id);
        List<Cliente> listar();
    }

    public class ClienteService : IClienteService
    {
        public static List<Cliente> lst = new List<Cliente>();

        public void agregar(Cliente cliente)
        {
            lst.Add(cliente);
        }

        public Cliente editar(int id)
        {
            Cliente clientes = lst.Where(cliente => cliente.Id == id ).First();
            return clientes;
        }

        public void eliminar(int id)
        {
            lst.Remove(lst.Where(cliente => cliente.Id == id ).First());
        }

        public List<Cliente> listar()
        {
            return lst;
        }
    
    }
}