using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;
using Nancy;
using Nancy.Bootstrapper;
using Nancy.Configuration;
using Nancy.TinyIoc;
using Uaaloo.Data.Services;

namespace Uaaloo
{

    public class Bootstrapper : DefaultNancyBootstrapper
    {
        public Bootstrapper() { }

        protected override void RequestStartup(TinyIoCContainer container, IPipelines pipelines, NancyContext context) {
            pipelines.BeforeRequest += ctx =>
	        {
                ctx.Items.Add("Inicio", DateTime.UtcNow);
                return null;
            };
    
            pipelines.AfterRequest += ctx =>
	        {
                var processRequest = (DateTime.UtcNow - (DateTime) ctx.Items["Inicio"]).TotalMilliseconds;
                Console.WriteLine("Processing Request: " + processRequest);

                ctx.Response.WithHeader("x-processing-Request", processRequest.ToString())
                            .WithHeader("Access-Control-Allow-Origin", "*")
                            .WithHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS, PATCH")
                            .WithHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
                            .WithHeader("Access-Control-Max-Age", "3600");
            };
        }

        public override void Configure(INancyEnvironment environment)
        {
            environment.Tracing(enabled: false, displayErrorTraces: true);
        }

        
        protected override void ConfigureApplicationContainer(TinyIoCContainer container)
        {
            base.ConfigureApplicationContainer(container);
            container.Register<IClienteService, ClienteService>();
        }
    }
}