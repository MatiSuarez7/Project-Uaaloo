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

        protected override void RequestStartup(TinyIoCContainer container, IPipelines pipelines, NancyContext context) { }

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