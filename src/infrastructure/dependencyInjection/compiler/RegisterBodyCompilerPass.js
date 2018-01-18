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
            let bodyReference = container.getReference(serviceId);
            let bodyDefinition = container.getDefinition(serviceId);
            let bodyTags = bodyDefinition.getTags();

            for (let tag of bodyTags) {
                if (tag.name !== "kryptopus.terminal_interface.body") {
                    continue;
                }

                if (!tag.body_id) {
                    throw new Error(`Invalid tag "kryptopus.terminal_interface.body" for service ${serviceId}`);
                }

                let options = Object.assign({}, tag);
                delete options.name;
                delete options.body_id;

                definition.addMethodCall("addBody", [
                    tag.body_id,
                    bodyReference,
                    options
                ]);
            }

        }

    }
}
