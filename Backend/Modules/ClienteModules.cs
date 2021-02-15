using System.Collections.Generic;
using Nancy;
using Nancy.ModelBinding;
using Nancy.Responses;
using Uaaloo.Data.Models;
using Uaaloo.Data.Services;

namespace Uaaloo.Controllers
{
    public class ClienteModules : Nancy.NancyModule
    {
        public static int nClienteId = 1;
        public ClienteModules(IClienteService clienteService) : base("/Clientes")
        {
            Get("/", _ => clienteService.listar() );
            Post("/create/{N}/{A}/{D}", args =>
            {
                var model = this.Bind<Cliente>();
                model.Id=nClienteId++;
                model.Apellido=args.A;
                model.Nombre=args.N;
                model.Direccion=args.D;
                clienteService.agregar(model);
                return HttpStatusCode.OK;
            });
            Delete("/delete/{id}", args =>
            {
                clienteService.eliminar(args.id);
                return HttpStatusCode.OK;
            });
            Put("/edit/{id}/{N}/{A}/{D}", args =>
            {
                int clienteId = args.id;
                Cliente cliente = clienteService.editar(clienteId);
                cliente.Apellido=args.A;
                cliente.Nombre=args.N;
                cliente.Direccion=args.D;
                return HttpStatusCode.OK;
            });
            
        }

    }
}