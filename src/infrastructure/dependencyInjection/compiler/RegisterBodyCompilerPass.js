/* @flow */
import type Container from "solfegejs-dependency-injection/src/ServiceContainer/Container"

/**
 * Compiler pass for the service container
 * It handles tags to register bodies
 */
export default class RegisterBodyCompilerPass
{
    /**
     * Process the tags
     *
     * @param   {Container}     container   Service container
     */
    async process(container:Container)
    {
        let definition = container.getDefinition("kryptopus_terminal_interface_body_registry");

        let serviceIds = container.findTaggedServiceIds("kryptopus.terminal_interface.body");
        for (let serviceId of serviceIds) {
            let reference = container.getReference(serviceId);
            definition.addMethodCall("addBody", [reference]);
        }
    }
}
